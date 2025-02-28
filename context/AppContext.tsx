import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  loggedIn: boolean;
  logOut: () => Promise<void>;
  setLoggedIn: (loggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // Cargar el token almacenado al iniciar la app
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
        setLoggedIn(true);
      }
    };
    loadToken();
  }, []);

  // Guardar o eliminar el token
  const handleSetToken = async (newToken: string | null) => {
    if (newToken) {
      await AsyncStorage.setItem("authToken", newToken);
      setToken(newToken);
      setLoggedIn(true);
    } else {
      await AsyncStorage.removeItem("authToken");
      setToken(null);
      setLoggedIn(false);
    }
  };

  const logOut = async () => {
    await handleSetToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, loggedIn, logOut, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
