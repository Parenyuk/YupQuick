import '../global.css';

import { Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuBar from "../src/components/units/MenuBar";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                    </Stack>
                    <MenuBar />
                </View>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
