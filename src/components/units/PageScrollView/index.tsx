import { ScrollView, type ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { cn } from '@/src/lib/cn';

type PageScrollViewProps = ScrollViewProps & {
    contentContainerClassName?: string;
    keyboardAware?: boolean;
};

const PageScrollView = ({ contentContainerClassName, className, keyboardAware, ...props }: PageScrollViewProps) => {
    const Component = keyboardAware ? KeyboardAwareScrollView : ScrollView;

    return (
        <Component
            className={cn('flex-1 bg-white rounded-t-3xl', className)}
            contentContainerClassName={cn('pt-7 px-6 pb-6', contentContainerClassName)}
            showsVerticalScrollIndicator={false}
            {...(keyboardAware && { enableOnAndroid: true, extraScrollHeight: 100, enableAutomaticScroll: true })}
            {...props}
        />
    );
};

export default PageScrollView;
