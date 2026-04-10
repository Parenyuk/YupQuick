import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const WEB_CLIENT_ID = '849685544249-7h5c81aasjqnuao98jrvvmo69sg9r6dk.apps.googleusercontent.com';
// TODO: Create separate OAuth Client IDs in Google Cloud Console and replace these:
const ANDROID_CLIENT_ID = '849685544249-dgu5j49ikuuem94kjjqo52pri2n7t9g4.apps.googleusercontent.com';
export function useGoogleAuth() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: WEB_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
    });

    return { request, response, promptAsync };
}
