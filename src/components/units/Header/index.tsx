import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "@/src/lib/cn";

type HeaderProps = {
    className?: string;
    children?: React.ReactNode;
};

const Header = ({ children, className }: HeaderProps) => {
    const { top } = useSafeAreaInsets();

    return (
        <View className='bg-yellow-primary w-full' style={{ paddingTop: top }}>
            <View className={cn('h-32 px-4 flex-row items-center justify-between', className)}>
                {children}
            </View>
        </View>
    );
};

export default Header;
