import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setLoggedIn(true);
        const idToken = await currentUser.getIdToken();
        await AsyncStorage.setItem("authToken", idToken);
        await AsyncStorage.setItem("firebase_uid", currentUser.uid);
        console.log("Usuario autenticado:", currentUser.email);
        router.replace("/"); // Redirige a la página principal
      } else {
        router.replace("/AuthenticationPage")
        setLoggedIn(false);
        setToken(null);
        await AsyncStorage.removeItem("authToken");
        await AsyncStorage.removeItem("firebase_uid");
        console.log("Usuario no autenticado");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSetToken = async (newToken: string | null) => {
    newToken ? await AsyncStorage.setItem("authToken", newToken) : await AsyncStorage.removeItem("authToken");
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};


// Hook para usar el contexto (Opcional, pero recomendado)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};