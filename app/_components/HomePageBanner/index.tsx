import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";

import Banner1 from "@/assets/png/home/home-page-banner-1.png";
import Banner2 from "@/assets/png/home/home-page-banner-2.jpg";
import Banner3 from "@/assets/png/home/home-page-banner-3.jpg";
import Banner4 from "@/assets/png/home/home-page-banner-4.jpg";
import Banner5 from "@/assets/png/home/home-page-banner-5.jpg";

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];
const { width } = Dimensions.get("window");

const HomePageBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <View className='my-4'>
            <FlatList
                ref={flatListRef}
                data={banners}
                keyExtractor={(_, i) => String(i)}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                ItemSeparatorComponent={() => <View className="w-3" />}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{ width, height: 128, borderRadius: 16 }}
                        resizeMode="cover"
                    />
                )}
            />
            <View className="flex-row justify-center gap-1 mt-2">
                {banners.map((_item, i) => (
                    <View
                        key={i}
                        className={`h-1 rounded-full ${i === activeIndex ? "w-6 bg-orange-primary" : "w-2 bg-orange-second"}`}
                    />
                ))}
            </View>
        </View>
    );
};

export default HomePageBanner;
