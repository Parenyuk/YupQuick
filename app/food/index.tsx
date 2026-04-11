import { View } from 'react-native';
import Header from '@/src/components/units/Header';
import PageScrollView from '@/src/components/units/PageScrollView';
import SearchInput from '@/src/components/elements/Inputs/SearchInput';
import BasketIcon from '@/assets/svg/basket.svg';
import RingIcon from '@/assets/svg/ring.svg';
import UserIcon from '@/assets/svg/user.svg';
import CategoryTabs from '@/app/food/_components/CategoryTabs';
import FoodCard from '@/app/food/_components/FoodCard';
import TortillaChipsImg from '@/assets/png/food/tortilla-chips.png';
import PorkSkewerImg from '@/assets/png/food/pork-skewer.png';

const foodItems = [
    {
        id: 1,
        image: TortillaChipsImg,
        title: 'Mexican appetizer',
        description: 'Tortilla Chips With Toppins',
        price: '$15.00',
        rating: '5.0',
    },
    {
        id: 2,
        image: PorkSkewerImg,
        title: 'Pork Skewer',
        description: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
        price: '$12.99',
        rating: '4.0',
    },
];

export default function FoodScreen() {
    return (
        <View className="flex-1 bg-yellow-primary">
            <Header>
                <View className="flex-row items-center justify-between w-full gap-4 mt-7">
                    <SearchInput />
                    <View className="flex-row items-center gap-2">
                        <View className="p-1.5 bg-white rounded-xl">
                            <BasketIcon width={16} height={16} />
                        </View>
                        <View className="p-1.5 bg-white rounded-xl">
                            <RingIcon width={16} height={16} />
                        </View>
                        <View className="p-1.5 bg-white rounded-xl">
                            <UserIcon width={16} height={16} />
                        </View>
                    </View>
                </View>
            </Header>
            <PageScrollView>
                <CategoryTabs />
                {foodItems.map((item, index) => (
                    <View key={item.id}>
                        <FoodCard
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            rating={item.rating}
                        />
                        {index < foodItems.length - 1 && (
                            <View className="border-b border-gray-200" />
                        )}
                    </View>
                ))}
            </PageScrollView>
        </View>
    );
}
