import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFoodStore, type FoodCategory } from '@/src/store/useFoodStore';

const categories: FoodCategory[] = ['Meal', 'Dessert', 'Vegan', 'Drinks', 'Snacks'];

const CategoryTabs = () => {
    const activeCategory = useFoodStore((s) => s.activeCategory);
    const setActiveCategory = useFoodStore((s) => s.setActiveCategory);

    return (
        <View className="mb-4">
            <View className="flex-row items-center mb-3">
                <Text className="text-xs text-font-primary mr-2">Sort by</Text>
                <Text className="text-xs text-orange-primary font-medium">Popular</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="gap-2"
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        activeOpacity={0.7}
                        onPress={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full ${
                            activeCategory === category
                                ? 'bg-orange-primary'
                                : 'bg-orange-second'
                        }`}
                    >
                        <Text
                            className={`text-xs font-medium ${
                                activeCategory === category
                                    ? 'text-white'
                                    : 'text-font-primary'
                            }`}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoryTabs;
