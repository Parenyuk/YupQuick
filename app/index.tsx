import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import Header from "../src/components/units/Header";
import SearchInput from "@/src/components/elements/Inputs/SearchInput";
import BasketIcon from "@/assets/svg/basket.svg";
import UserIcon from "@/assets/svg/user.svg";
import RingIcon from "@/assets/svg/ring.svg";
import HeaderContent from "@/app/_components/HeaderContent";

export default function Index() {
    return (
        <View className="flex-1 bg-white">
            <Header className='mt-7.5 mb-4 flex gap-6'>
              <HeaderContent />
            </Header>
            <View className="flex-1 items-center justify-center">
            <Text className="mt-2 text-xl font-bold text-blue-600">victory 2028</Text>
            <Link href="/profile">Go to Profile</Link>

            <StatusBar style="auto" />
            </View>
        </View>
    );
}
