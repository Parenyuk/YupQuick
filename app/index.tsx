import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from "expo-router";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-center text-base text-neutral-800">
                Відкрийте app/index.tsx, щоб почати працювати над застосунком!
            </Text>
            <Text className="mt-2 text-xl font-bold text-blue-600">victory 2028</Text>
            <Link href="/profile">Go to Profile</Link>

            <StatusBar style="auto" />
        </View>
    );
}
