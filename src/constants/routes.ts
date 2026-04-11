export const AppRoutes = {
    // Main
    HOME: 'HOME',
    // Auth
    ONBOARDING: 'ONBOARDING',
    LOGIN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    // App
    PROFILE: 'PROFILE',
    FOOD: 'FOOD',
    FOOD_DETAIL: 'FOOD_DETAIL',
} as const;

export type DynamicRoute = (options?: { id?: string | number | null }) => string;

export const ROUTES: Record<keyof typeof AppRoutes, DynamicRoute> = {
    // Main
    [AppRoutes.HOME]: () => '/',
    // Auth
    [AppRoutes.ONBOARDING]: () => '/onboarding',
    [AppRoutes.LOGIN]: () => '/login',
    [AppRoutes.SIGN_UP]: () => '/sign-up',
    // App
    [AppRoutes.PROFILE]: () => '/profile',
    [AppRoutes.FOOD]: () => '/food',
    [AppRoutes.FOOD_DETAIL]: ({ id } = {}) => `/food/${id ?? ''}`,
};
