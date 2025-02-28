import React, { createContext, useState, ReactNode, useContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext) as UserContextProps;


