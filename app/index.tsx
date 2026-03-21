import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useRef, useState } from 'react';
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
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { style } from './Style';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const PANEL_MIN_HEIGHT = 120;
const PANEL_MAX_HEIGHT = SCREEN_HEIGHT * 0.8;

export default function Index() {
    const [DEFAULT, setDefaultTime] = useState('10');
    const [tempoRimanente, setTempoRimanente] = useState(parseInt(DEFAULT) * 60);
    const [tempoTotale, setTempoTotale] = useState(parseInt(DEFAULT) * 60);
    const [attivo, setAttivo] = useState(false);
    
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const panelHeight = useRef(new Animated.Value(PANEL_MIN_HEIGHT)).current;
    const currentHeightRef = useRef(PANEL_MIN_HEIGHT);

    const C = 2 * Math.PI * 100;
    const riempimento = (tempoRimanente / tempoTotale) * C;

    const minuti = Math.floor(tempoRimanente / 60);
    const secondi = tempoRimanente % 60;
    const tempoFormattato = `${minuti}:${secondi.toString().padStart(2, '0')}`;

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

    useEffect(() => {
        let interval = 0;
        if (attivo && tempoRimanente > 0) {
            interval = setInterval(() => {
                setTempoRimanente(prev => Math.max(prev - 1, 0));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [attivo, tempoRimanente]);

    const aggiornaTempo = (min = 0, sec = 0) => {
        const tot = min * 60 + sec;
        setTempoRimanente(tot);
        setTempoTotale(tot);
    };

    const handleTouchStart = (evt: GestureResponderEvent) => {
        // Memorizza la posizione iniziale
    };

    const handleTouchMove = (evt: GestureResponderEvent) => {
        // Gestita tramite onResponderMove
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
            <ScrollView style={style.background} contentContainerStyle={{ paddingBottom: 150 }}>
                <View>
                    <View style={style.headerContainer}>
                        <View>
                            <Text style={style.title}>FocusFlow</Text>
                            <Text style={style.sub_title}>Scopri il tuo ritmo naturale</Text>
                        </View>
                        <View style={style.headerButtons}>
                            <TouchableOpacity onPress={openSettings} style={style.settingsButton}>
                                <Text style={style.settingsIcon}>⚙️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.mode_pane}>
                        <TouchableOpacity key={1} style={[style.mode_button, style.mode_button_active]}>
                            <View style={[style.dot, { backgroundColor: '#1ECAD3' }]} />
                            <Text style={[style.mode_text, style.mode_text_active]}>Focus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={2} style={style.mode_button}>
                            <View style={[style.dot, { backgroundColor: '#2ECC71' }]} />
                            <Text style={style.mode_text}>Short Break</Text>
                        </TouchableOpacity>
                        <TouchableOpacity key={3} style={style.mode_button}>
                            <View style={[style.dot, { backgroundColor: '#9B59B6' }]} />
                            <Text style={style.mode_text}>Long Break</Text>
                        </TouchableOpacity>
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
                                stroke="#1ECAD3"      
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
                                <Picker
                                    selectedValue={minuti}
                                    style={style.picker}
                                    itemStyle={style.pickerItem}
                                    mode="dropdown"
                                    onValueChange={(itemValue) => aggiornaTempo(itemValue, secondi)}
                                >
                                    {[...Array(60).keys()].map(i => (
                                        <Picker.Item key={i} label={`${i} min`} value={i} />
                                    ))}
                                </Picker>

                                <Picker
                                    selectedValue={secondi}
                                    style={style.picker}
                                    itemStyle={style.pickerItem}
                                    mode="dropdown"
                                    onValueChange={(itemValue) => aggiornaTempo(minuti, itemValue)}
                                >
                                    {[...Array(60).keys()].map(i => (
                                        <Picker.Item key={i} label={`${i} sec`} value={i} />
                                    ))}
                                </Picker>
                            </View>
                        )}

                        <View style={style.buttons_continer}>
                            <TouchableOpacity onPress={() => setAttivo(!attivo)} style={style.start_button}>
                                <Text style={style.start_button_text}>{attivo ? "Stop Focus" : "Start Focus"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setTempoRimanente(parseInt(DEFAULT) * 60);
                                setTempoTotale(parseInt(DEFAULT) * 60);
                                setAttivo(false);
                            }} style={style.restart_button}>
                                <Text style={style.start_button_text}>Restart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* PANNELLO BOTTOM TRASCINABILE */}
            <Animated.View 
                style={[
                    style.bottomPanel, 
                    { height: panelHeight }
                ]}
            >
                <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={togglePanel}
                    style={style.panelHeader}
                >
                    <View style={style.dragHandle} />
                    <Text style={style.panelTitle}>Sessioni oggi</Text>
                    <Text style={style.panelSubtitle}>Nessuna sessione completata. Inizia ora!</Text>
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
                            <Text style={style.statNumber}>0</Text>
                            <Text style={style.statLabel}>sessioni oggi</Text>
                        </View>
                        <View style={style.statBox}>
                            <Text style={style.statNumber}>0m</Text>
                            <Text style={style.statLabel}>focus totale</Text>
                        </View>
                    </View>

                    <Text style={style.sectionTitle}>Storico Sessioni</Text>
                    <View style={style.historyEmpty}>
                        <Text style={style.historyEmptyText}>Nessuna sessione completata oggi</Text>
                    </View>
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
                                    trackColor={{ false: '#767577', true: '#1ECAD3' }}
                                    thumbColor={soundEnabled ? '#fff' : '#f4f3f4'}
                                />
                            </View>

                            <View style={style.settingOption}>
                                <Text style={style.settingText}>Vibrazione</Text>
                                <Switch
                                    value={vibrationEnabled}
                                    onValueChange={setVibrationEnabled}
                                    trackColor={{ false: '#767577', true: '#1ECAD3' }}
                                    thumbColor={vibrationEnabled ? '#fff' : '#f4f3f4'}
                                />
                            </View>

                            <View style={style.settingOption}>
                                <Text style={style.settingText}>Timer predefinito</Text>
                                <TextInput
                                    style={style.input}
                                    placeholder='Minuti'
                                    placeholderTextColor='#999'
                                    value={DEFAULT}
                                    onChangeText={(text) => {
                                        let numericValue = text.replace(/[^0-9]/g, '');
                                        if(parseInt(numericValue) >= 60)
                                            numericValue = "59";
                                        setDefaultTime(numericValue);
                                    }}
                                    onEndEditing={() => salvaTimerPredefinito(DEFAULT)}
                                    keyboardType='numeric'
                                    maxLength={2}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )}
        </View>
    );
}