import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import Header from "../src/components/units/Header";
import HeaderContent from "@/app/_components/HeaderContent";
import MenuTypes from "@/app/_components/MenuTypes";

export default function Index() {
    return (
        <View className="flex-1 bg-yellow-primary">
            <Header className='mt-7.5 mb-4 flex gap-6'>
              <HeaderContent />
            </Header>
            <View className='flex-1 bg-white pt-7 px-6' style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
                <MenuTypes />
            <Link href="/profile">Go to Profile1</Link>
            <StatusBar style="auto" />
            </View>
        </View>
    );
}
