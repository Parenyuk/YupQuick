import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { Link, router } from "expo-router";
import { ROUTES } from "@/src/constants/routes";
import Header from "../src/components/units/Header";
import HeaderContent from "@/app/_components/HeaderContent";
import MenuTypes from "@/app/_components/MenuTypes";
import BestSellerBlock from "@/app/_components/BestSellerBlock";
import HomePageBanner from "@/app/_components/HomePageBanner";
import RecommendBlock from "@/app/_components/RecommendBlock";

export default function Index() {
    const auth = false;

    useEffect(() => {
        if (!auth) {
            router.replace(ROUTES.LOGIN());
        }
    }, [auth]);

    if (!auth) return null;


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
                <Link href={ROUTES.PROFILE()}>Go to Profile1</Link>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}
