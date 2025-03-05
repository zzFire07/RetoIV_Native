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
    if(!user){
      setUser({
        firebase_uid: "loading",
        user_id: "0",
        name: "Loading",
        phone_number: "",
        email: "loading@gmail.com",
        tickets: "0",
      });
    }
  }, []);

  useEffect(() => {
    console.log("tickets cargados: ", user?.tickets);
  }
  , [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      const user_firebaseuid = await AsyncStorage.getItem("firebase_uid");
      try {
        if (user_firebaseuid) {
          const response = await apiService.getUserByFirebaseId(user_firebaseuid);
          console.log("Usuario actualizado:", response.data);
          setUser(response.data);
        } else {
          console.log("Firebase UID is null");
        }
      } catch (error) {
        console.error("Error al loguear el usuario:", error);
      }
    };

    // Ejecutar la función inmediatamente para la primera carga
    fetchUserData();

    // Configurar el intervalo para actualizar cada 30 segundos
    const interval = setInterval(() => {
      fetchUserData();
    }, 30000); // Cambia a 60000 para 1 minuto

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