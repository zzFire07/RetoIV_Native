import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importar AsyncStorage
import "react-native-reanimated";
import "react-native-screens";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AppProvider } from "@/context/AppContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });
    // :diamante_azul_pequeño: Agregar el useEffect para verificar el token en AsyncStorage
    useEffect(() => {
        const checkToken = async () => {
            try {
                console.log("Ejecutando checkToken en RootLayout...");
                const token = await AsyncStorage.getItem("authToken");
                if (token === null) {
                    console.log("TOKEN ENCONTRADO EN ASYNCSTORAGE: null (No hay token)");
                } else {
                    console.log("TOKEN ENCONTRADO EN ASYNCSTORAGE:", token);
                }
            } catch (error) {
                console.error("Error al obtener el token:", error);
            }
        };
        checkToken();
    }, []);
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }
    return (
        <AppProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                    <Stack.Screen
                        name="TicketPage"
                        options={{
                            headerTitle: "",
                            headerTransparent: true,
                            headerBackButtonDisplayMode: "minimal",
                        }}
                    />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </AppProvider>
    );
}






