import { TouchableOpacity } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { cn } from '@/src/lib/cn';

type SocialButtonProps = {
    Icon: React.FC<SvgProps>;
    onPress?: () => void;
    className?: string;
};

const SocialButton = ({ Icon, onPress, className }: SocialButtonProps) => {
    return (
        <TouchableOpacity
            className={cn('w-9 h-9 bg-orange-primary/10 rounded-full items-center justify-center', className)}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Icon width={20} height={20} />
        </TouchableOpacity>
    );
};

export default SocialButton;
