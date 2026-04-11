import { View, Text, TouchableOpacity } from 'react-native';

type Topping = {
    name: string;
    price: string;
};

type ToppingsListProps = {
    toppings: Topping[];
    selectedTopping: string;
    onSelect: (name: string) => void;
};

const ToppingsList = ({ toppings, selectedTopping, onSelect }: ToppingsListProps) => {
    return (
        <View>
            <Text className="text-xl font-medium text-font-primary mb-3">Toppings</Text>
            {toppings.map((topping, index) => (
                <View key={topping.name}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => onSelect(topping.name)}
                        className="flex-row items-center justify-between py-3"
                    >
                        <View className="flex-row items-center gap-3">
                            <View className="w-4 h-4 rounded-full border-2 border-orange-primary items-center justify-center">
                                {selectedTopping === topping.name && (
                                    <View className="w-2 h-2 rounded-full bg-orange-primary" />
                                )}
                            </View>
                            <Text className="text-sm text-font-primary">{topping.name}</Text>
                        </View>
                        <Text className="text-xs text-font-primary">{topping.price}</Text>
                    </TouchableOpacity>
                    {index < toppings.length - 1 && (
                        <View className="border-b border-gray-200" />
                    )}
                </View>
            ))}
        </View>
    );
};

export default ToppingsList;
