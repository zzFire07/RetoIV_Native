import React, { useEffect } from "react";
import CustomHeader from "./CustomHeader";
import { StyleSheet, View, Text } from "react-native";
import BuyTicketsButton from "./BuyTicketsButton";
import MatchDisponibility from "./MatchDisponibility";
import { useAuth } from "@/context/AuthContext";
import WhatsAppButton from "./WhatsAppButton";
import apiService from "@/services/apiService";
import { useUser } from "@/context/UserContext";

export function HomePage() {
  const { loggedIn } = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    const authenticateUser = async () => {
      console.log("Autenticar usuario por primera vez:");
        try {
          const response = await apiService.logUser();
          console.log("Usuario autenticado:", response.data);
          setUser(response.data.user);
        } catch (error) {
          console.log("Error al loguear el usuario:", error);
        }
    };
    console.log("Usuario:", user);
    if(user == null){
      authenticateUser();
    }
  }, []);


  if (!loggedIn) {
    return (
      <>
      </>
    )
  }
  
    return (
      <>
        <CustomHeader/>

        <View style={styles.container}>
        {user && user.user_id && <Text style={styles.userIdText} >Socio N° {user.user_id}</Text>}
          <View style={styles.matchDisponibility}>
          <MatchDisponibility />
          </View>
          <BuyTicketsButton />
        </View>
        <WhatsAppButton/>
      </>
    );  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00bf63",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  fullpage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  userIdText: {
    fontSize: 18,
    fontWeight: "600", 
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    marginTop:70,
  },
  matchDisponibility: {
    marginTop : 0,
  },
});