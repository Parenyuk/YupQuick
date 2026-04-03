import { Image, ImageSourcePropType, View, Text } from "react-native";
import SushiImg from "@/assets/png/sushi.png";
import RiceImg from "@/assets/png/rice.png";
import DessertOneImg from "@/assets/png/dessert-1.png";
import DessertTwoImg from "@/assets/png/dessert-2.png";
import {Link} from "expo-router";

const BestSellerBlock = () => {
    const bestSellerArr: { id: number; icon: ImageSourcePropType }[] = [
        { id: 0, icon: SushiImg },
        { id: 1, icon: RiceImg },
        { id: 2, icon: DessertOneImg },
        { id: 3, icon: DessertTwoImg },
    ];

    return (
        <View>
            <View className='flex-row justify-between my-3'>
                <Text className='text-xl font-medium'>Best Seller</Text>
                <Link href={'/best-seller'} className='text-orange-primary text-sm'>View all →</Link>
            </View>

            <View className="flex-row items-start justify-between gap-4 mt-4">
                {bestSellerArr.map(item => (
                    <View key={item.id}>
                        <Image
                            source={item.icon}
                            className="w-20 h-28"
                            resizeMode="contain"
                        />
                    </View>
                ))}
            </View>
        </View>

    );
};

export default BestSellerBlock;
