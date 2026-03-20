import { Text, useColorScheme, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  const colorScheme = useColorScheme()

  return (
    <View className="flex-1 justify-center bg-background flex-col items-center gap-4">
      <AntDesign name="code" size={32} color={colorScheme === 'dark' ? 'white' : 'black'} />
      <Text className="text-center text-2xl px-6 text-muted-foreground">Try using some Tailwind Classes in the markup like <Text className="font-semibold text-foreground"></Text>.</Text>
    </View>
  );
}
