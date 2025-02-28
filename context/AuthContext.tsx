import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  loggedIn: boolean;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      storedToken && setToken(storedToken);
    })();
  }, []);

  const handleSetToken = async (newToken: string | null) => {
    newToken ? await AsyncStorage.setItem("authToken", newToken) : await AsyncStorage.removeItem("authToken");
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, loggedIn: !!token, logOut: () => handleSetToken(null) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;
