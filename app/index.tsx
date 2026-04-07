import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View, Text } from 'react-native';
import { Link } from "expo-router";
import Header from "../src/components/units/Header";
import HeaderContent from "@/app/_components/HeaderContent";
import MenuTypes from "@/app/_components/MenuTypes";
import BestSellerBlock from "@/app/_components/BestSellerBlock";
import HomePageBanner from "@/app/_components/HomePageBanner";
import RecommendBlock from "@/app/_components/RecommendBlock";
import Logo from "@/assets/png/Logo.png";
import { APP_NAME } from "@/src/constants/appInfo";
import ButtonComponent from "@/src/components/elements/Buttons/ButtonComponent";

export default function Index() {


    const auth = true;

    const slogan = 'Order fresh meals in seconds, enjoy quick delivery and discover flavors from your city.';
    if (!auth) {
        return (
            <View className='flex-1 bg-orange-primary items-center justify-center'>
                <Image source={Logo} resizeMode='contain' />
                <View className='my-5 uppercase'>
                    <Text className='text-orange-primary'>{APP_NAME.first}</Text>
                    <Text className='text-white'>{APP_NAME.second}</Text>
                    <Text className='text-white' >{slogan}</Text>
                    <View className='mt-6 gap-3'>
                        <ButtonComponent label='Log in' variant='primary' />
                        <ButtonComponent label='Sign Up' variant='secondary' />
                    </View>
                </View>

            </View>
            )
    }


    return (
        <View className="flex-1 bg-yellow-primary">
            <Header className='mt-7.5 mb-4 flex gap-6'>
              <HeaderContent />
            </Header>
            <ScrollView className='flex-1 bg-white rounded-t-3xl' contentContainerClassName='pt-7 px-6 pb-6'>
                <MenuTypes />
                <BestSellerBlock />
                <HomePageBanner />
                <RecommendBlock />
                <Link href="/profile">Go to Profile1</Link>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}
