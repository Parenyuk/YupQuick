import { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as LocalAuthentication from 'expo-local-authentication';
import FormInput from '@/src/components/forms/FormInput';
import ButtonComponent from '@/src/components/elements/Buttons/ButtonComponent';
import Header from '@/src/components/units/Header';
import PageScrollView from '@/src/components/units/PageScrollView';
import SocialButton from '@/src/components/elements/Buttons/SocialButton';
import EyeIcon from '@/assets/svg/eye.svg';
import EyeOffIcon from '@/assets/svg/eye-off.svg';
import GmailIcon from '@/assets/svg/login/Gmail.svg';
import FacebookIcon from '@/assets/svg/login/Facebook.svg';
import MarkIcon from '@/assets/svg/login/Mark.svg';
import MarkImage from '@/assets/png/login/Mark.png';
import { ROUTES } from '@/src/constants/routes';
import { auth } from '@/src/lib/auth';
import { useGoogleAuth } from '@/src/lib/google-auth';

const loginSchema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'At least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [biometricView, setBiometricView] = useState(false);
    const { response, promptAsync } = useGoogleAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const handleGoogleLogin = async () => {
                await auth.login();
                router.replace(ROUTES.HOME());
            };
            handleGoogleLogin();
        }
    }, [response]);

    const handleGoogleLogin = () => {
        promptAsync();
    };

    const onSubmit = async (_data: LoginForm) => {
        await auth.login();
        router.replace(ROUTES.HOME());
    };

    const handleBiometric = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        if (!compatible) {
            Alert.alert('Not supported', 'Biometric auth is not available on this device.');
            return;
        }
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        if (!enrolled) {
            Alert.alert('Not set up', 'No biometrics enrolled. Please set up Face ID or fingerprint in Settings.');
            return;
        }
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Sign in to YumQuick',
            fallbackLabel: 'Use password',
        });
        if (result.success) {
            await auth.login();
            router.replace(ROUTES.HOME());
        }
    };

    if (biometricView) {
        return (
            <View className='flex-1 bg-yellow-primary'>
                <Header title='Log In' showBack onBack={() => setBiometricView(false)} />

                <PageScrollView contentContainerClassName='items-center justify-center flex-1'>
                    <TouchableOpacity activeOpacity={0.7} onPress={handleBiometric}>
                        <Image
                            source={MarkImage}
                            className='w-64 h-64'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>

                    <View className='w-full gap-3 mt-10'>
                        <ButtonComponent
                            label='Continue'
                            variant='primary'
                            className='w-full py-4'
                            onPress={handleBiometric}
                        />
                        <ButtonComponent
                            label='Skip'
                            variant='secondary'
                            className='w-full py-4'
                            onPress={() => setBiometricView(false)}
                        />
                    </View>
                </PageScrollView>
            </View>
        );
    }

    return (
        <View className='flex-1 bg-yellow-primary'>
            <Header title='Log In' showBack />

            <PageScrollView
                keyboardAware
                keyboardShouldPersistTaps='handled'
            >
                    {/* Welcome section */}
                    <View className='mb-6'>
                        <Text className='text-font-primary text-2xl font-bold mb-2'>Welcome</Text>
                        <Text className='text-gray-500 text-sm leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>

                    {/* Form */}
                    <View className='gap-4'>
                        <Controller
                            control={control}
                            name='email'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInput
                                    label='Email or Mobile Number'
                                    placeholder='example@example.com'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.email?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInput
                                    label='Password'
                                    placeholder='**************'
                                    secureTextEntry={!showPassword}
                                    autoCapitalize='none'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.password?.message}
                                    rightIcon={
                                        <View className='bg-orange-primary/10 rounded-full p-2'>
                                            {showPassword
                                                ? <EyeIcon width={20} height={16} />
                                                : <EyeOffIcon width={20} height={16} />}
                                        </View>
                                    }
                                    onRightIconPress={() => setShowPassword(prev => !prev)}
                                />
                            )}
                        />

                        <TouchableOpacity className='self-end' activeOpacity={0.7}>
                            <Text className='text-orange-primary text-sm font-semibold'>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Log In button */}
                    <View className='mt-6'>
                        <ButtonComponent
                            label='Log In'
                            variant='primary'
                            className='w-full py-4'
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>

                    {/* Divider */}
                    <View className='items-center my-4'>
                        <Text className='text-gray-400 text-sm'>or sign up with</Text>
                    </View>

                    {/* Social + Biometric */}
                    <View className='flex-row justify-center gap-4'>
                        <SocialButton Icon={GmailIcon} onPress={async () => {
                            await auth.login();
                            router.replace(ROUTES.HOME());
                        }} />
                        <SocialButton Icon={FacebookIcon} />
                        <SocialButton Icon={MarkIcon} onPress={() => setBiometricView(true)} />
                    </View>

                    <View className='flex-row justify-center mt-6 gap-1'>
                        <Text className='text-gray-400 text-sm'>Don't have an account?</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text className='text-orange-primary text-sm font-semibold'>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </PageScrollView>
        </View>
    );
}
