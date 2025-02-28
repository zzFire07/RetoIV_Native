import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn, editMode, setEditMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};