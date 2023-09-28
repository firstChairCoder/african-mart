import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from "@expo-google-fonts/poppins";

import MainNavigator from "./src/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Medium: Poppins_500Medium,
    Regular: Poppins_400Regular,
    SemiBold: Poppins_600SemiBold,
    Bold: Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
