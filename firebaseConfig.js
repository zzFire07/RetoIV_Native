// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCredential, GoogleAuthProvider, onAuthStateChanged  } from 'firebase/auth';
import { useState, useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};

// Permite que WebBrowser cierre la sesión correctamente
WebBrowser.maybeCompleteAuthSession();

// Obtener el redirect URI correcto
console.log(makeRedirectUri({ useProxy: true }));
console.log(makeRedirectUri({ useProxy: false }));

export default function useGoogleAuth() {

  const [user, setUser] = useState(null);
  
  // Configurar el proveedor de Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "1083190847956-12sm91dqgh1ms21qqvgm4fielagp76ft.apps.googleusercontent.com",
    androidClientId: "1083190847956-notm40hnffsccoroov51iju80smub5hl.apps.googleusercontent.com",
    iosClientId: "1083190847956-r444ciukkek0n7ffdrmre4236ltu9v34.apps.googleusercontent.com",
  });

  // Efecto para manejar el estado de autenticación
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // Manejar la respuesta de Google
  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
    }
  }, [response]);

  return { user, signIn: () => promptAsync(), signOut: () => auth.signOut() };
}