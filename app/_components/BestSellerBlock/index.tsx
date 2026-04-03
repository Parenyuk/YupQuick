import { Image, ImageSourcePropType, View, Text } from "react-native";
import SushiImg from "@/assets/png/sushi.png";
import RiceImg from "@/assets/png/rice.png";
import DessertOneImg from "@/assets/png/dessert-1.png";
import DessertTwoImg from "@/assets/png/dessert-2.png";
import {Link} from "expo-router";

const BestSellerBlock = () => {
    const bestSellerArr: { id: number; icon: ImageSourcePropType; price: string }[] = [
        { id: 0, icon: SushiImg, price: "$12.99" },
        { id: 1, icon: RiceImg, price: "$8.49" },
        { id: 2, icon: DessertOneImg, price: "$6.99" },
        { id: 3, icon: DessertTwoImg, price: "$9.50" },
    ];

    return (
        <View>
            <View className='flex-row justify-between my-3'>
                <Text className='text-xl font-medium'>Best Seller</Text>
                <Link href={'/best-seller'} className='text-orange-primary text-sm'>View all →</Link>
            </View>

            <View className="flex-row items-start justify-between gap-4 mt-4">
                {bestSellerArr.map(item => (
                    <View key={item.id} className="relative">
                        <Image
                            source={item.icon}
                            className="w-20 h-28"
                            resizeMode="contain"
                        />
                        <View className="absolute bottom-0 right-0 bg-orange-primary px-1.5 py-0.5 rounded-lg">
                            <Text className="text-white text-xs font-semibold">{item.price}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>

    );
};

export default BestSellerBlock;
