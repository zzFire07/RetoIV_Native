import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface AuthContextProps {
  user : User | null;
  token: string | null;
  setToken: (token: string | null) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      storedToken && setToken(storedToken);
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const idToken = await currentUser.getIdToken();
        setUser(currentUser);
        setToken(idToken);
        setLoggedIn(true);
        await AsyncStorage.setItem("authToken", idToken);
        console.log("Usuario autenticado:", currentUser.email);
        console.log("Token:", idToken);
      } else {
        setUser(null);
        setToken(null);
        setLoggedIn(false);
        await AsyncStorage.removeItem("authToken");
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
    <AuthContext.Provider value={{ user, token, setToken: handleSetToken, loggedIn, setLoggedIn }}>
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