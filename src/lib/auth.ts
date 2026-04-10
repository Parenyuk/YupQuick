import * as SecureStore from 'expo-secure-store';

const AUTH_KEY = 'is_authenticated';

export const auth = {
    async login() {
        await SecureStore.setItemAsync(AUTH_KEY, 'true');
    },
    async logout() {
        await SecureStore.deleteItemAsync(AUTH_KEY);
    },
    async isAuthenticated() {
        const value = await SecureStore.getItemAsync(AUTH_KEY);
        return value === 'true';
    },
};
