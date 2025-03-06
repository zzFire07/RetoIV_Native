import apiService from "@/services/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface User {
  user_id: string;
  firebase_uid: string;
  name: string;
  phone_number: string;
  email: string;
  tickets: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("tickets cargados: ", user?.tickets);
  }
  , [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if(user == null){
          throw new Error("Usuario no cargado");
          return;
        }
          const response = await apiService.logUser();
          console.log("Usuario actualizado de forma regular:", response.data.user);
          setUser(response.data.user);
      } catch (error) {
        console.log("Error al loguear el usuario de forma regular:", error);
      }
    };

    // Ejecutar la función inmediatamente para la primera carga
    fetchUserData();

    // Configurar el intervalo para actualizar cada 30 segundos
    const interval = setInterval(() => {
      fetchUserData();
    }, 120000); // Cambia a 120000 para 2 minutos, 60000 para 1 minuto o 30000 para 30 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // Mantener el array vacío para ejecutarlo solo una vez


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