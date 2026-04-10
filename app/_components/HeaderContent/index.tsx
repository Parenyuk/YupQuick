import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import SearchInput from "@/src/components/elements/Inputs/SearchInput";
import BasketIcon from "@/assets/svg/basket.svg";
import RingIcon from "@/assets/svg/ring.svg";
import UserIcon from "@/assets/svg/user.svg";
import { auth } from "@/src/lib/auth";
import { ROUTES } from "@/src/constants/routes";

const HeaderContent = () => {
    return (
        <View className='w-full'>
            <View className='flex flex-row items-center justify-between w-full gap-6 mt-7 mb-4'>
                <SearchInput />
                <View className='flex-row items-center gap-2'>
                    <View className='p-1.5 bg-white rounded-xl'>
                        <BasketIcon width={16} height={16} />
                    </View>
                    <View className='p-1.5 bg-white rounded-xl'>
                        <RingIcon width={16} height={16} />
                    </View>
                    <TouchableOpacity
                        className='p-1.5 bg-white rounded-xl'
                        activeOpacity={0.7}
                        onPress={async () => {
                            await auth.logout();
                            router.replace(ROUTES.LOGIN());
                        }}
                    >
                        <UserIcon width={16} height={16} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex items-start'>
                <Text className='text-white text-4xl font-bold'>Good Morning</Text>
                <Text className='text-orange-primary font-medium'>Rise and shine! It's breakfast time</Text>
            </View>
        </View>
    );
};

export default HeaderContent;
