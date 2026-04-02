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
            <View className={cn('px-4', className)}>
                {children}
            </View>
        </View>
    );
};

export default Header;
