import { View, Text } from "react-native";
import SearchInput from "@/src/components/elements/Inputs/SearchInput";
import BasketIcon from "@/assets/svg/basket.svg";
import RingIcon from "@/assets/svg/ring.svg";
import UserIcon from "@/assets/svg/user.svg";

const HeaderContent = () => {
    return (
        <View className='min-h-full'>
            <View className='flex flex-row items-center justify-between w-full gap-6 mt-7 mb-4'>
                <SearchInput />
                <View className='flex-row items-center gap-2'>
                    <View className='p-1.5 bg-white rounded-xl'>
                        <BasketIcon width={16} height={16} />
                    </View>
                    <View className='p-1.5 bg-white rounded-xl'>
                        <RingIcon width={16} height={16} />
                    </View>
                    <View className='p-1.5 bg-white rounded-xl'>
                        <UserIcon width={16} height={16} />
                    </View>
                </View>
            </View>
            <View className='flex items-start'>
                <Text className='text-white text-3xl font-bold'> Good Morning</Text>
                <Text className='text-orange-primary font-medium'>Rise and shine! It's breakfast time</Text>
            </View>
        </View>
    );
};

export default HeaderContent;
