import { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    useWindowDimensions,
    ViewToken,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonComponent from '@/src/components/elements/Buttons/ButtonComponent';
import { ROUTES } from '@/src/constants/routes';

import Step1Image from '@/assets/png/onboarding/step-1.png';
import Step2Image from '@/assets/png/onboarding/step-2.png';
import Step3Image from '@/assets/png/onboarding/step-3.png';
import Step1Icon from '@/assets/svg/onboarding/step-1.svg';
import Step2Icon from '@/assets/svg/onboarding/step-2.svg';
import Step3Icon from '@/assets/svg/onboarding/step-3.svg';

const STEPS = [
    {
        id: '1',
        image: Step1Image,
        Icon: Step1Icon,
        title: 'Order for Food',
        description:
            'Easily set up your database tables — fast, secure, and always in sync with your latest code.',
    },
    {
        id: '2',
        image: Step2Image,
        Icon: Step2Icon,
        title: 'Easy Payment',
        description:
            'Pay quickly and securely with your preferred method — card, wallet, or cash on delivery.',
    },
    {
        id: '3',
        image: Step3Image,
        Icon: Step3Icon,
        title: 'Fast Delivery',
        description:
            'Get your favorite meals delivered to your doorstep in minutes, hot and fresh.',
    },
];

export default function OnboardingPage() {
    const { width, height } = useWindowDimensions();
    const { top, bottom } = useSafeAreaInsets();
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
            if (viewableItems.length > 0 && viewableItems[0].index != null) {
                setActiveIndex(viewableItems[0].index);
            }
        },
    ).current;

    const handleNext = () => {
        if (activeIndex < STEPS.length - 1) {
            flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
        } else {
            router.replace(ROUTES.LOGIN());
        }
    };

    const renderItem = ({ item }: { item: (typeof STEPS)[number] }) => {
        const { Icon } = item;

        return (
            <View style={{ width, height }}>
                <View className="flex-1">
                    <Image
                        source={item.image}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                <View
                    className="bg-white rounded-t-3xl px-6 pt-8 mb-6"
                    style={{ paddingBottom: bottom > 0 ? bottom + 16 : 32 }}
                >
                    <View className="items-center">
                        <Icon width={48} height={48} />

                        <Text className="text-orange-primary text-2xl font-bold mt-4 text-center">
                            {item.title}
                        </Text>

                        <Text className="text-gray-500 text-sm text-center leading-5 mt-3 px-4">
                            {item.description}
                        </Text>
                    </View>

                    <View className="w-full items-center mt-8">
                        <View className="flex-row gap-2 mb-6">
                            {STEPS.map((_, i) => (
                                <View
                                    key={i}
                                    className={`h-2 rounded-full w-6 ${
                                        i === activeIndex
                                            ? 'bg-orange-primary'
                                            : 'bg-yellow-second'
                                    }`}
                                />
                            ))}
                        </View>

                        <ButtonComponent
                            label={
                                activeIndex === STEPS.length - 1
                                    ? 'Get Started'
                                    : 'Next'
                            }
                            variant="primary"
                            className="w-full py-4"
                            onPress={handleNext}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <View style={{ height: top }} className="bg-yellow-primary" />

            <FlatList
                ref={flatListRef}
                data={STEPS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                bounces={false}
            />
        </View>
    );
}
