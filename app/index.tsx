import { Picker } from "@react-native-picker/picker";
import { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    GestureResponderEvent,
    ScrollView,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { style } from "./Style";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface Session {
  id: string;
  mode: TimerMode;
  duration: number;
  date: string;
}

const MODES: Record<
  TimerMode,
  { label: string; color: string; minutes: number }
> = {
  focus: { label: "Focus", color: "#1ECAD3", minutes: 25 },
  shortBreak: { label: "Short Break", color: "#2ECC71", minutes: 5 },
  longBreak: { label: "Long Break", color: "#9B59B6", minutes: 15 },
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const PANEL_MIN_HEIGHT = 120;
const PANEL_MAX_HEIGHT = SCREEN_HEIGHT * 0.8;

export default function Index() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [DEFAULT, setDefaultTime] = useState("25");
  const [tempoRimanente, setTempoRimanente] = useState(parseInt(DEFAULT) * 60);
  const [tempoTotale, setTempoTotale] = useState(parseInt(DEFAULT) * 60);
  const [attivo, setAttivo] = useState(false);

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [focusCount, setFocusCount] = useState(0);

  const panelHeight = useRef(new Animated.Value(PANEL_MIN_HEIGHT)).current;
  const currentHeightRef = useRef(PANEL_MIN_HEIGHT);

  // Load data on mount
  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const saved = await AsyncStorage.getItem("sessions");
      if (saved) {
        const parsed = JSON.parse(saved);
        setSessions(parsed);
      }
    } catch (error) {
      console.error("Error loading sessions:", error);
    }
  };

  const saveSessions = useCallback(async (newSessions: Session[]) => {
    try {
      await AsyncStorage.setItem("sessions", JSON.stringify(newSessions));
    } catch (error) {
      console.error("Error saving sessions:", error);
    }
  }, []);

  const C = 2 * Math.PI * 100;
  const riempimento = (tempoRimanente / tempoTotale) * C;

  const minuti = Math.floor(tempoRimanente / 60);
  const secondi = tempoRimanente % 60;
  const tempoFormattato = `${minuti}:${secondi.toString().padStart(2, "0")}`;

  const stats = {
    sessioni: sessions.length,
    minutiTotali: sessions.reduce((acc, s) => acc + s.duration, 0),
  };

  useEffect(() => {
    const listener = panelHeight.addListener(({ value }) => {
      currentHeightRef.current = value;
    });
    return () => panelHeight.removeListener(listener);
  }, []);

  const expandPanel = () => {
    setIsPanelOpen(true);
    Animated.spring(panelHeight, {
      toValue: PANEL_MAX_HEIGHT,
      useNativeDriver: false,
      friction: 8,
      tension: 40,
    }).start();
  };

  const collapsePanel = () => {
    setIsPanelOpen(false);
    Animated.spring(panelHeight, {
      toValue: PANEL_MIN_HEIGHT,
      useNativeDriver: false,
      friction: 8,
      tension: 40,
    }).start();
  };

  const togglePanel = () => {
    if (isPanelOpen) {
      collapsePanel();
    } else {
      expandPanel();
    }
  };

  const openSettings = () => {
    if (isPanelOpen) {
      collapsePanel();
    }
    setModalVisible(true);
  };

  const closeSettings = () => {
    setModalVisible(false);
  };

  // Timer effect with mode switching and notifications
  useEffect(() => {
    let interval = 0;
    if (attivo && tempoRimanente > 0) {
      interval = setInterval(() => {
        setTempoRimanente((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (attivo && tempoRimanente === 0) {
      // Timer finished - trigger notification
      triggerNotification();
      completeSession();
      autoSwitchMode();
    }
    return () => clearInterval(interval);
  }, [attivo, tempoRimanente]);

  const triggerNotification = async () => {
    if (vibrationEnabled) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    // Sound notification would be here (using expo-av)
    Alert.alert('Session Complete! 🎉', `Great job! ${MODES[mode].label} session finished.`);
  };

  const completeSession = () => {
    const newSession: Session = {
      id: Date.now().toString(),
      mode,
      duration: MODES[mode].minutes,
      date: new Date().toISOString(),
    };
    const updatedSessions = [...sessions, newSession];
    setSessions(updatedSessions);
    saveSessions(updatedSessions);
    setAttivo(false);
  };

  const autoSwitchMode = () => {
    if (mode === 'focus') {
      setFocusCount((prev) => prev + 1);
      if (focusCount + 1 >= 4) {
        // After 4 focus sessions, long break
        switchMode('longBreak');
        setFocusCount(0);
      } else {
        switchMode('shortBreak');
      }
    } else {
      switchMode('focus');
    }
  };

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    const minutes = MODES[newMode].minutes;
    setTempoRimanente(minutes * 60);
    setTempoTotale(minutes * 60);
  };

  const updateTime = (min = 0, sec = 0) => {
    const tot = min * 60 + sec;
    setTempoRimanente(tot);
    setTempoTotale(tot);
  };

  const handleTouchStart = (evt: GestureResponderEvent) => {
    // Touch start
  };

  const handleTouchMove = (evt: GestureResponderEvent) => {
    // Touch move
  };

  const handleTouchEnd = (evt: GestureResponderEvent) => {
    const currentHeight = currentHeightRef.current;
    const threshold = (PANEL_MAX_HEIGHT + PANEL_MIN_HEIGHT) / 2;

    if (currentHeight > threshold && !isPanelOpen) {
      expandPanel();
    } else if (currentHeight < threshold && isPanelOpen) {
      collapsePanel();
    } else {
      Animated.spring(panelHeight, {
        toValue: isPanelOpen ? PANEL_MAX_HEIGHT : PANEL_MIN_HEIGHT,
        useNativeDriver: false,
        friction: 8,
      }).start();
    }
  };

  const salvaTimerPredefinito = (valore: string) => {
    const num = parseInt(valore) || 10;
    setDefaultTime(num.toString());
  };

  return (
    <View style={style.mainContainer}>
      {/* CONTENUTO PRINCIPALE */}
      <ScrollView
        style={style.background}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View>
          <View style={style.headerContainer}>
            <View>
              <Text style={style.title}>FocusFlow</Text>
              <Text style={style.sub_title}>Scopri il tuo ritmo naturale</Text>
            </View>
            <View style={style.headerButtons}>
              <TouchableOpacity
                onPress={openSettings}
                style={style.settingsButton}
              >
                <Text style={style.settingsIcon}>⚙️</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.mode_pane}>
            {Object.entries(MODES).map(([modeKey, modeData]) => (
              <TouchableOpacity
                key={modeKey}
                style={[
                  style.mode_button,
                  mode === modeKey && style.mode_button_active,
                ]}
                onPress={() => !attivo && switchMode(modeKey as TimerMode)}
                disabled={attivo}
              >
                <View style={[style.dot, { backgroundColor: modeData.color }]} />
                <Text
                  style={[
                    style.mode_text,
                    mode === modeKey && style.mode_text_active,
                  ]}
                >
                  {modeData.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={style.clock_position}>
            <Svg width="240" height="240">
              <Circle
                cx="110"
                cy="110"
                r="100"
                stroke="#9c9c9c"
                strokeWidth="20"
                fill="none"
              />
              <Circle
                cx="110"
                cy="110"
                r="100"
                stroke={MODES[mode].color}
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${riempimento} ${C}`}
                strokeLinecap="round"
                transform="rotate(-90 110 110)"
              />
            </Svg>

            <Text style={style.clock_text}>{tempoFormattato}</Text>

            {!attivo && (
              <View style={style.pickerContainer}>
                <View style={style.pickerBox}>
                  <Picker
                    selectedValue={minuti}
                    style={style.picker}
                    itemStyle={style.pickerItem}
                    onValueChange={(itemValue) =>
                      updateTime(itemValue, secondi)
                    }
                  >
                    {[...Array(60).keys()].map((i) => (
                      <Picker.Item key={i} label={`${i} min`} value={i} />
                    ))}
                  </Picker>
                </View>

                <Text style={style.dots}>:</Text>

                <View style={style.pickerBox}>
                  <Picker
                    selectedValue={secondi}
                    style={style.picker}
                    itemStyle={style.pickerItem}
                    onValueChange={(itemValue) =>
                      updateTime(minuti, itemValue)
                    }
                  >
                    {[...Array(60).keys()].map((i) => (
                      <Picker.Item key={i} label={`${i} sec`} value={i} />
                    ))}
                  </Picker>
                </View>
              </View>
            )}

            <View style={style.buttons_continer}>
              <TouchableOpacity
                onPress={() => setAttivo(!attivo)}
                style={style.start_button}
              >
                <Text style={style.start_button_text}>
                  {attivo ? `Stop ${MODES[mode].label}` : `Start ${MODES[mode].label}`}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const newTempo = MODES[mode].minutes * 60;
                  setTempoRimanente(newTempo);
                  setTempoTotale(newTempo);
                  setAttivo(false);
                }}
                style={style.restart_button}
              >
                <Text style={style.start_button_text}>Restart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* PANNELLO BOTTOM TRASCINABILE */}
      <Animated.View style={[style.bottomPanel, { height: panelHeight }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={togglePanel}
          style={style.panelHeader}
        >
          <View style={style.dragHandle} />
          <Text style={style.panelTitle}>Sessioni oggi</Text>
          <Text style={style.panelSubtitle}>
            Nessuna sessione completata. Inizia ora!
          </Text>
        </TouchableOpacity>

        <View
          style={style.dragArea}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        <ScrollView
          style={style.panelScrollContent}
          scrollEnabled={isPanelOpen}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <View style={style.statsContainer}>
            <View style={style.statBox}>
              <Text style={style.statNumber}>{stats.sessioni}</Text>
              <Text style={style.statLabel}>sessioni oggi</Text>
            </View>
            <View style={style.statBox}>
              <Text style={style.statNumber}>{Math.floor(stats.minutiTotali)}m</Text>
              <Text style={style.statLabel}>focus totale</Text>
            </View>
          </View>

          <Text style={style.sectionTitle}>Storico Sessioni</Text>
          {sessions.length === 0 ? (
            <View style={style.historyEmpty}>
              <Text style={style.historyEmptyText}>
                Nessuna sessione completata oggi
              </Text>
            </View>
          ) : (
            <View>
              {sessions.map((session) => (
                <View key={session.id} style={style.historyEmpty}>
                  <Text style={style.historyEmptyText}>
                    ✓ {MODES[session.mode].label} - {session.duration}min
                  </Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </Animated.View>

      {/* MODAL IMPOSTAZIONI */}
      {isModalVisible && (
        <View style={style.modalOverlay}>
          <TouchableOpacity
            style={style.modalBackdrop}
            onPress={closeSettings}
          />
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Impostazioni</Text>
              <TouchableOpacity onPress={closeSettings}>
                <Text style={style.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={style.modalScroll}>
              <View style={style.settingOption}>
                <Text style={style.settingText}>Suono notifica</Text>
                <Switch
                  value={soundEnabled}
                  onValueChange={setSoundEnabled}
                  trackColor={{ false: "#767577", true: "#1ECAD3" }}
                  thumbColor={soundEnabled ? "#fff" : "#f4f3f4"}
                />
              </View>

              <View style={style.settingOption}>
                <Text style={style.settingText}>Vibrazione</Text>
                <Switch
                  value={vibrationEnabled}
                  onValueChange={setVibrationEnabled}
                  trackColor={{ false: "#767577", true: "#1ECAD3" }}
                  thumbColor={vibrationEnabled ? "#fff" : "#f4f3f4"}
                />
              </View>

              <View style={style.settingOption}>
                <Text style={style.settingText}>Timer predefinito</Text>
                <TextInput
                  style={style.input}
                  placeholder="Minuti"
                  placeholderTextColor="#999"
                  value={DEFAULT}
                  onChangeText={(text) => {
                    let numericValue = text.replace(/[^0-9]/g, "");
                    if (parseInt(numericValue) >= 61) numericValue = "60";
                    setDefaultTime(numericValue);
                  }}
                  onEndEditing={() => {
                    const num = parseInt(DEFAULT) || 25;
                    setDefaultTime(num.toString());
                  }}
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              
              <View style={style.sectionTitle}>
                <Text style={[style.settingText, { marginTop: 15 }]}>Durate modalità</Text>
              </View>
              <View style={[style.settingOption, { marginTop: 10 }]}>
                <Text style={style.settingText}>Focus: {MODES.focus.minutes} min</Text>
              </View>
              <View style={style.settingOption}>
                <Text style={style.settingText}>Short Break: {MODES.shortBreak.minutes} min</Text>
              </View>
              <View style={style.settingOption}>
                <Text style={style.settingText}>Long Break: {MODES.longBreak.minutes} min</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}
