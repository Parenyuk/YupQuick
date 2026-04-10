export const AppRoutes = {
    // Main
    HOME: 'HOME',
    // Auth
    LOGIN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    // App
    PROFILE: 'PROFILE',
} as const;

export type DynamicRoute = (options?: { id?: string | number | null }) => string;

export const ROUTES: Record<keyof typeof AppRoutes, DynamicRoute> = {
    // Main
    [AppRoutes.HOME]: () => '/',
    // Auth
    [AppRoutes.LOGIN]: () => '/login',
    [AppRoutes.SIGN_UP]: () => '/sign-up',
    // App
    [AppRoutes.PROFILE]: () => '/profile',
};
