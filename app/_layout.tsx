import '../global.css';

import { Stack, usePathname } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuBar from "../src/components/units/MenuBar";

const HIDE_MENU_ROUTES = ['/login', '/onboarding'];

export default function RootLayout() {
    const pathname = usePathname();
    const showMenu = !HIDE_MENU_ROUTES.includes(pathname);

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="login/index" options={{ headerShown: false }} />
                        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
                        <Stack.Screen name="food/index" options={{ headerShown: false }} />
                        <Stack.Screen name="food/[id]" options={{ headerShown: false }} />
                    </Stack>
                    {showMenu && <MenuBar />}
                </View>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
