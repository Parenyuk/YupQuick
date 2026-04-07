import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as LocalAuthentication from 'expo-local-authentication';
import FormInput from '@/src/components/forms/FormInput';
import ButtonComponent from '@/src/components/elements/Buttons/ButtonComponent';
import LockIcon from '@/assets/svg/lock.svg';
import PersonIcon from '@/assets/svg/person.svg';
import EyeIcon from '@/assets/svg/eye.svg';
import EyeOffIcon from '@/assets/svg/eye-off.svg';
import { ROUTES } from '@/src/constants/routes';

const loginSchema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'At least 6 characters'),
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
            router.replace(ROUTES.HOME());
        }
    };

    return (
        <KeyboardAvoidingView
            className='flex-1 bg-white'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                className='flex-1'
                contentContainerStyle={{ paddingTop: top + 16, paddingBottom: 32 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
            >
                {/* Back button */}
                <TouchableOpacity
                    className='mx-6 mb-6 w-10 h-10 rounded-full bg-orange-second items-center justify-center'
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Text className='text-font-primary text-lg font-bold'>←</Text>
                </TouchableOpacity>

                {/* Title */}
                <View className='px-6 mb-8'>
                    <Text className='text-font-primary text-3xl font-bold mb-1'>Welcome back!</Text>
                    <Text className='text-gray-400 text-sm'>Sign in to continue ordering</Text>
                </View>

                {/* Form */}
                <View className='px-6 gap-4'>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                label='Email'
                                placeholder='your@email.com'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                                leftIcon={<PersonIcon width={18} height={20} />}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='password'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                label='Password'
                                placeholder='••••••••'
                                secureTextEntry={!showPassword}
                                autoCapitalize='none'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={errors.password?.message}
                                leftIcon={<LockIcon width={18} height={22} />}
                                rightIcon={
                                    showPassword
                                        ? <EyeIcon width={20} height={16} />
                                        : <EyeOffIcon width={20} height={16} />
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
                <View className='px-6 mt-6'>
                    <ButtonComponent
                        label='Log In'
                        variant='primary'
                        className='w-full py-4'
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>

                {/* Divider */}
                <View className='flex-row items-center mx-6 my-6 gap-3'>
                    <View className='flex-1 h-px bg-gray-200' />
                    <Text className='text-gray-400 text-sm'>or sign in with</Text>
                    <View className='flex-1 h-px bg-gray-200' />
                </View>

                {/* Social + Biometric */}
                <View className='px-6 flex-row gap-3'>
                    <TouchableOpacity
                        className='flex-1 flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5'
                        activeOpacity={0.7}
                    >
                        <Text className='font-bold text-lg' style={{ color: '#4285F4' }}>G</Text>
                        <Text className='text-font-primary font-semibold text-sm'>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='flex-1 flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5'
                        activeOpacity={0.7}
                    >
                        <Text className='font-bold text-lg' style={{ color: '#1877F2' }}>f</Text>
                        <Text className='text-font-primary font-semibold text-sm'>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='flex-1 flex-row items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3.5'
                        activeOpacity={0.7}
                        onPress={handleBiometric}
                    >
                        <Text className='text-xl'>&#x1F9B6;</Text>
                        <Text className='text-font-primary font-semibold text-sm'>Touch ID</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up */}
                <View className='flex-row justify-center mt-8 gap-1'>
                    <Text className='text-gray-400 text-sm'>Don't have an account?</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text className='text-orange-primary text-sm font-semibold'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
