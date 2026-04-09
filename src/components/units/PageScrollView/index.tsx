import { ScrollView, type ScrollViewProps } from 'react-native';
import { cn } from '@/src/lib/cn';

type PageScrollViewProps = ScrollViewProps & {
    contentContainerClassName?: string;
};

const PageScrollView = ({ contentContainerClassName, className, ...props }: PageScrollViewProps) => {
    return (
        <ScrollView
            className={cn('flex-1 bg-white rounded-t-3xl', className)}
            contentContainerClassName={cn('pt-7 px-6 pb-6', contentContainerClassName)}
            showsVerticalScrollIndicator={false}
            {...props}
        />
    );
};

export default PageScrollView;
