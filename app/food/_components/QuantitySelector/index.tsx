import { View, Text, TouchableOpacity } from 'react-native';

type QuantitySelectorProps = {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

const QuantitySelector = ({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) => {
    return (
        <View className="flex-row items-center bg-white rounded-full px-1 py-0.5" style={{ gap: 8 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onDecrement}
                className="w-7 h-7 rounded-full bg-orange-second items-center justify-center"
            >
                <Text className="text-orange-primary text-lg font-medium leading-none">−</Text>
            </TouchableOpacity>
            <Text className="text-font-primary text-lg font-medium w-5 text-center">{quantity}</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onIncrement}
                className="w-7 h-7 rounded-full bg-orange-primary items-center justify-center"
            >
                <Text className="text-white text-lg font-medium leading-none">+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default QuantitySelector;
