import React, { createContext, useState, ReactNode, useContext } from "react";

interface User {
  id: string;
  name: string;
  phone: number;
  email: string;
  role: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>
           {children}
         </UserContext.Provider>;
};

// Hook para usar el contexto (Opcional, pero recomendado)
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};