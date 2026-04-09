import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const WEB_CLIENT_ID = '849685544249-7h5c81aasjqnuao98jrvvmo69sg9r6dk.apps.googleusercontent.com';

export function useGoogleAuth() {
    const redirectUri = makeRedirectUri({ scheme: 'yumquick' });

    console.log('Google Auth redirectUri:', redirectUri);

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: WEB_CLIENT_ID,
        androidClientId: WEB_CLIENT_ID,
        iosClientId: WEB_CLIENT_ID,
        redirectUri,
    });

    return { request, response, promptAsync };
}
