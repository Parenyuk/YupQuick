import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import StarIcon from '@/assets/svg/star.svg';
import ToppingsList from '@/app/food/_components/ToppingsList';
import QuantitySelector from '@/app/food/_components/QuantitySelector';
import TortillaChipsImg from '@/assets/png/food/tortilla-chips.png';

const toppings = [
    { name: 'Guacamole', price: '$2.99' },
    { name: 'Jalapeños', price: '$2.99' },
    { name: 'Ground Beef', price: '$3.99' },
    { name: 'Pico de Gallo', price: '$3.99' },
];

export default function FoodDetailScreen() {
    const { top } = useSafeAreaInsets();
    const [quantity, setQuantity] = useState(1);
    const [selectedTopping, setSelectedTopping] = useState('Jalapeños');

    return (
        <View className="flex-1 bg-yellow-primary">
            <View style={{ paddingTop: top }} className="px-6 pt-3 pb-4">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
                        <Text className="text-font-primary text-2xl">‹</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="w-6 h-6 rounded-full bg-orange-primary items-center justify-center"
                    >
                        <Text className="text-white text-xs">♥</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                className="flex-1 bg-gray-50 rounded-t-3xl"
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="items-center pt-6 px-6">
                    <View className="w-full h-56 rounded-[36px] overflow-hidden" style={{ backgroundColor: '#FF9E74' }}>
                        <Image
                            source={TortillaChipsImg}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <View className="px-6 mt-5">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-xl font-medium text-font-primary">Mexican Appetizer</Text>
                        <View className="flex-row items-center bg-orange-primary rounded-full px-2 py-0.5">
                            <Text className="text-xs text-white mr-1">5.0</Text>
                            <StarIcon width={10} height={10} />
                        </View>
                    </View>

                    <Text className="text-base text-font-primary mt-1">Tortilla Chips With Toppins</Text>

                    <Text className="text-base text-font-primary mt-3 leading-5 opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Text>

                    <View className="border-b border-gray-200 my-4" />

                    <ToppingsList
                        toppings={toppings}
                        selectedTopping={selectedTopping}
                        onSelect={setSelectedTopping}
                    />
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 bg-gray-50 px-6 pb-8 pt-4">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-4">
                        <Text className="text-2xl font-bold text-orange-primary">$50.00</Text>
                        <QuantitySelector
                            quantity={quantity}
                            onIncrement={() => setQuantity(q => q + 1)}
                            onDecrement={() => setQuantity(q => Math.max(1, q - 1))}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="bg-orange-primary rounded-full px-6 py-2.5"
                    >
                        <Text className="text-white font-medium text-base">Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
