import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "@/src/lib/cn";

type HeaderProps = {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    showBack?: boolean;
    onBack?: () => void;
};

const Header = ({ children, className, title, showBack, onBack }: HeaderProps) => {
    const { top } = useSafeAreaInsets();

    return (
        <View className='bg-yellow-primary w-full' style={{ paddingTop: top }}>
            <View className={cn('px-6 h-48 flex justify-center gap-6', className)}>
                {showBack && (
                    <View className='flex-row items-center'>
                        <TouchableOpacity
                            className='w-10 h-10 rounded-full items-center justify-center'
                            onPress={onBack ?? (() => router.back())}
                            activeOpacity={0.7}
                        >
                            <Text className='text-orange-primary text-2xl font-bold'>‹</Text>
                        </TouchableOpacity>
                        {title && (
                            <Text className='flex-1 text-white text-3xl font-bold text-center mr-10'>
                                {title}
                            </Text>
                        )}
                    </View>
                )}
                {!showBack && title && (
                    <Text className='text-white text-3xl font-bold text-center'>
                        {title}
                    </Text>
                )}
                {children}
            </View>
        </View>
    );
};

export default Header;
