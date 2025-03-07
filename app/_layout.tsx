import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "react-native-screens";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ContextProvider } from "@/context/ContextProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {

    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }
    return (
        <ContextProvider>
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
                    <Stack.Screen
                        name="LoginPage"
                        options={{
                            headerTitle: "",
                            headerTransparent: true,
                            headerBackButtonDisplayMode: "minimal",
                        }}
                    />
                    <Stack.Screen
                        name="RegisterPage"
                        options={{
                            headerTitle: "",
                            headerTransparent: true,
                            headerBackButtonDisplayMode: "minimal",
                        }}
                    />
                    <Stack.Screen
                        name="AuthenticationPage"
                        options={{
                            headerTitle: "",
                            headerTransparent: true,
                            headerBackButtonDisplayMode: "minimal",
                        }}
                    />
                    <Stack.Screen
                        name="PaymentStatusPage"
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </ContextProvider>
    );
}






