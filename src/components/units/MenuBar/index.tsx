import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ROUTES } from "@/src/constants/routes";
import HomeIcon from '@/assets/svg/home.svg';
import MenuIcon from '@/assets/svg/menu.svg';
import HeartIcon from '@/assets/svg/heart.svg';
import ListIcon from '@/assets/svg/list.svg';
import SupportIcon from '@/assets/svg/support.svg';

const MenuBar = () => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View className='w-full'>
            <View className='bg-orange-primary rounded-t-3xl w-full px-6 py-3 flex-row items-center justify-around'>
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.push(ROUTES.HOME())}>
                    <HomeIcon width={32} height={32} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <MenuIcon width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <HeartIcon width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.push(ROUTES.ONBOARDING())}>
                    <ListIcon width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <SupportIcon width={40} height={40} />
                </TouchableOpacity>
            </View>
            <View className='bg-white' style={{ height: bottom }} />
        </View>
    );
};

export default MenuBar;
