import { Image, ImageSourcePropType, View } from "react-native";
import Recommend1 from "@/assets/png/home/recommend-1.png";
import Recommend2 from "@/assets/png/home/recommend-2.png";

const RecommendBlock = () => {
    const recommendArr: { id: number; image: ImageSourcePropType }[] = [
        { id: 0, image: Recommend1 },
        { id: 1, image: Recommend2 },
    ];

    return (
        <View className="flex-row gap-3 mt-4">
            {recommendArr.map(item => (
                <Image
                    key={item.id}
                    source={item.image}
                    className="flex-1 h-36 rounded-2xl"
                    resizeMode="cover"
                />
            ))}
        </View>
    );
};

export default RecommendBlock;
