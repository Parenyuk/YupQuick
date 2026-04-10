import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { cn } from '@/src/lib/cn';

type FormInputProps = TextInputProps & {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    containerClassName?: string;
};

const FormInput = ({
    label,
    error,
    leftIcon,
    rightIcon,
    onRightIconPress,
    containerClassName,
    className,
    ...props
}: FormInputProps) => {
    return (
        <View className={cn('gap-2', containerClassName)}>
            {label && (
                <Text className='text-font-primary font-semibold text-base'>{label}</Text>
            )}
            <View className={cn(
                'flex-row items-center bg-yellow-second rounded-2xl px-4 gap-3',
                error && 'border border-red-500',
            )}>
                {leftIcon && <View className='opacity-60'>{leftIcon}</View>}
                <TextInput
                    className={cn('flex-1 text-font-primary text-base py-4', className)}
                    placeholderTextColor="#6B7280"
                    {...props}
                />
                {rightIcon && (
                    <TouchableOpacity onPress={onRightIconPress} activeOpacity={0.6}>
                        <View className='opacity-80'>{rightIcon}</View>
                    </TouchableOpacity>
                )}
            </View>
            {error && (
                <Text className='text-red-500 text-xs'>{error}</Text>
            )}
        </View>
    );
};

export default FormInput;
