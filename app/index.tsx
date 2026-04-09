import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Link, Redirect } from "expo-router";
import { ROUTES } from "@/src/constants/routes";
import Header from "../src/components/units/Header";
import HeaderContent from "@/app/_components/HeaderContent";
import PageScrollView from "@/src/components/units/PageScrollView";
import MenuTypes from "@/app/_components/MenuTypes";
import BestSellerBlock from "@/app/_components/BestSellerBlock";
import HomePageBanner from "@/app/_components/HomePageBanner";
import RecommendBlock from "@/app/_components/RecommendBlock";

export default function Index() {
    const auth = false;

    if (!auth) return <Redirect href={ROUTES.LOGIN()} />;


    return (
        <View className="flex-1 bg-yellow-primary">
            <Header>
              <HeaderContent />
            </Header>
            <PageScrollView>
                <MenuTypes />
                <BestSellerBlock />
                <HomePageBanner />
                <RecommendBlock />
                <Link href={ROUTES.PROFILE()}>Go to Profile1</Link>
                <StatusBar style="auto" />
            </PageScrollView>
        </View>
    );
}
