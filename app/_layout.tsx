import '../global.css';

import { Stack, usePathname } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuBar from "../src/components/units/MenuBar";
import { ROUTES } from "../src/constants/routes";

const AUTH_ROUTES = [ROUTES.LOGIN()];

export default function RootLayout() {
    const pathname = usePathname();
    const showMenuBar = !AUTH_ROUTES.includes(pathname);

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="login/index" options={{ headerShown: false }} />
                    </Stack>
                    {showMenuBar && <MenuBar />}
                </View>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
