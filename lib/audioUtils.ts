import { Audio } from "expo-av";

export const playNotificationSound = async () => {
  try {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/notification.mp3"),
      { shouldPlay: true },
    );
    await sound.playAsync();
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};

export const setupAudioSession = async () => {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: true,
    });
  } catch (error) {
    console.error("Error setting up audio session:", error);
  }
};
