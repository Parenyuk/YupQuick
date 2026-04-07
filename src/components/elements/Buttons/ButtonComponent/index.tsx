import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { cn } from "@/src/lib/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
    label: string;
    variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, { container: string; text: string }> = {
    primary: {
        container: "bg-yellow-primary",
        text: "text-orange-primary",
    },
    secondary: {
        container: "bg-yellow-secondary",
        text: "text-orange-primary",
    },
};

const ButtonComponent = ({ label, variant = "primary", className, ...props }: ButtonProps) => {
    const styles = variantStyles[variant];

    return (
        <TouchableOpacity
            className={cn("rounded-full px-6 py-3 items-center justify-center", styles.container, className)}
            activeOpacity={0.8}
            {...props}
        >
            <Text className={cn("font-semibold text-base", styles.text)}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
