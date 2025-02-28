import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Recuperar el token almacenado al iniciar la app
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('authToken');
      if (storedToken) {
        setToken(storedToken);
        setLoggedIn(true);
      }
    };
    loadToken();
  }, []);

  const handleSetToken = async (newToken: string | null) => {
    if (newToken) {
      await AsyncStorage.setItem('authToken', newToken);
      setToken(newToken);
      setLoggedIn(true);
    } else {
      await AsyncStorage.removeItem('authToken');
      setToken(null);
      setLoggedIn(false);
    }
  };

  const logOut = async () => {
    await handleSetToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, loggedIn, setLoggedIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AuthProvider');
  }
  return context;
};
