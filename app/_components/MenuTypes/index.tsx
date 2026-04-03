import { Image, ImageSourcePropType, Text, View } from "react-native";

import SnacksImg from '@/assets/png/Snacks.png';
import MealsImg from '@/assets/png/Meals.png';
import VeganImg from '@/assets/png/Vegan.png';
import DessertsImg from '@/assets/png/Desserts.png';
import DrinksImg from '@/assets/png/Drinks.png';

const menuTypeArr: { id: number; icon: ImageSourcePropType; title: string }[] = [
    { id: 0, icon: SnacksImg, title: 'Snacks' },
    { id: 1, icon: MealsImg, title: 'Meal' },
    { id: 2, icon: VeganImg, title: 'Vegan' },
    { id: 3, icon: DessertsImg, title: 'Dessert' },
    { id: 4, icon: DrinksImg, title: 'Drinks' },
];

const MenuTypes = () => {

    return (
        <View className='flex-row justify-between gap-5 pb-4 border-b border-orange-lite'>
            {menuTypeArr.map(item => (
                <View className='items-center gap-1' key={item.id}>
                    <View key={item.id} className=' gap-1 bg-yellow-second px-2 py-3 rounded-full'>
                        <Image source={item.icon} className='w-10 h-10' resizeMode='contain' />
                    </View>
                    <Text className='text-sm text-font-primary'>{item.title}</Text>
                </View>
            ))}
        </View>
    )
};

export default MenuTypes;
