import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ROUTES } from '@/src/constants/routes';
import StarIcon from '@/assets/svg/star.svg';

type FoodCardProps = {
    id: number;
    image: ImageSourcePropType;
    title: string;
    description: string;
    price: string;
    rating: string;
};

const FoodCard = ({ id, image, title, description, price, rating }: FoodCardProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push(ROUTES.FOOD_DETAIL({ id }))}
            className="py-4"
        >
            <Image
                source={image}
                className="w-full h-44 rounded-2xl"
                resizeMode="cover"
            />
            <View className="mt-3 flex-row justify-between items-start">
                <View className="flex-1 mr-3">
                    <Text className="text-lg font-semibold text-font-primary">{title}</Text>
                    <Text className="text-xs text-gray-500 mt-1" numberOfLines={2}>
                        {description}
                    </Text>
                </View>
                <Text className="text-lg font-medium text-font-primary">{price}</Text>
            </View>
            <View className="flex-row items-center mt-2">
                <View className="flex-row items-center bg-orange-primary rounded-full px-2 py-0.5">
                    <Text className="text-xs text-white mr-1">{rating}</Text>
                    <StarIcon width={10} height={10} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FoodCard;
