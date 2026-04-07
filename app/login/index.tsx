import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { ROUTES } from '@/src/constants/routes';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FormInput from '@/src/components/forms/FormInput';
import ButtonComponent from '@/src/components/elements/Buttons/ButtonComponent';
import Logo from '@/assets/png/Logo.png';
import { APP_NAME } from '@/src/constants/appInfo';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LockIcon from '@/assets/Food Delivery App UI Kit Food App Design Food Mobile App Delivery UI (Community)/Vector-1.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UserIcon from '@/assets/Food Delivery App UI Kit Food App Design Food Mobile App Delivery UI (Community)/Vector-12.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EyeIcon from '@/assets/Food Delivery App UI Kit Food App Design Food Mobile App Delivery UI (Community)/Vector-31.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EyeOffIcon from '@/assets/Food Delivery App UI Kit Food App Design Food Mobile App Delivery UI (Community)/Vector-32.svg';

const loginSchema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const { top } = useSafeAreaInsets();
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (_data: LoginForm) => {
        router.replace(ROUTES.HOME());
    };

    return (
        <KeyboardAvoidingView
            className='flex-1 bg-white'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                className='flex-1'
                contentContainerStyle={{ paddingTop: top }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
            >
                {/* Header */}
                <View className='bg-orange-primary px-6 pb-10 items-center'>
                    <TouchableOpacity
                        className='self-start py-3'
                        onPress={() => router.back()}
                        activeOpacity={0.7}
                    >
                        <Text className='text-white text-2xl font-bold'>←</Text>
                    </TouchableOpacity>

                    <Image source={Logo} className='w-20 h-20 mt-2' resizeMode='contain' />

                    <View className='mt-3 items-center'>
                        <Text className='text-yellow-primary text-3xl font-bold uppercase tracking-widest'>
                            {APP_NAME.first}
                        </Text>
                        <Text className='text-white text-3xl font-bold uppercase tracking-widest'>
                            {APP_NAME.second}
                        </Text>
                    </View>
                </View>

                {/* Curved divider */}
                <View className='bg-orange-primary h-8'>
                    <View className='bg-white h-8 rounded-t-3xl' />
                </View>

                {/* Form */}
                <View className='px-6 pt-4 pb-10'>
                    <Text className='text-font-primary text-2xl font-bold mb-1'>Welcome back!</Text>
                    <Text className='text-gray-400 text-sm mb-8'>
                        Sign in to your account to continue
                    </Text>

                    {/* Email */}
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                label='Email'
                                containerClassName='mb-4'
                                placeholder='your@email.com'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                                leftIcon={<UserIcon width={18} height={18} />}
                            />
                        )}
                    />

                    {/* Password */}
                    <Controller
                        control={control}
                        name='password'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                label='Password'
                                containerClassName='mb-2'
                                placeholder='••••••••'
                                secureTextEntry={!showPassword}
                                autoCapitalize='none'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.password?.message}
                                leftIcon={<LockIcon width={18} height={22} />}
                                rightIcon={showPassword
                                    ? <EyeIcon width={20} height={16} />
                                    : <EyeOffIcon width={20} height={16} />
                                }
                                onRightIconPress={() => setShowPassword(prev => !prev)}
                            />
                        )}
                    />

                    {/* Forgot password */}
                    <TouchableOpacity className='self-end mb-8' activeOpacity={0.7}>
                        <Text className='text-orange-primary text-sm font-semibold'>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                    {/* Login button */}
                    <ButtonComponent
                        label='Log In'
                        variant='primary'
                        className='w-full py-4'
                        onPress={handleSubmit(onSubmit)}
                    />

                    {/* Divider */}
                    <View className='flex-row items-center my-7 gap-3'>
                        <View className='flex-1 h-px bg-gray-200' />
                        <Text className='text-gray-400 text-sm'>Or continue with</Text>
                        <View className='flex-1 h-px bg-gray-200' />
                    </View>

                    {/* Social login */}
                    <View className='flex-row gap-4'>
                        <TouchableOpacity
                            className='flex-1 flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5'
                            activeOpacity={0.7}
                        >
                            <Text className='font-bold text-base' style={{ color: '#4285F4' }}>G</Text>
                            <Text className='text-font-primary font-semibold text-sm'>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className='flex-1 flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5'
                            activeOpacity={0.7}
                        >
                            <Text className='font-bold text-base' style={{ color: '#1877F2' }}>f</Text>
                            <Text className='text-font-primary font-semibold text-sm'>Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign up */}
                    <View className='flex-row justify-center mt-8 gap-1'>
                        <Text className='text-gray-400 text-sm'>Don't have an account?</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text className='text-orange-primary text-sm font-semibold'>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
