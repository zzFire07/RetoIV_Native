import React, { useEffect } from "react";
import CustomHeader from "./CustomHeader";
import { StyleSheet, View } from "react-native";
import BuyTicketsButton from "./BuyTicketsButton";
import MatchDisponibility from "./MatchDisponibility";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export function HomePage() {
  const { loggedIn, setLoggedIn } = useAuth();

  const router = useRouter();

  useEffect(() => {
    console.log("logueado en homepage?", loggedIn);
    setTimeout(() => {
    if (!loggedIn) {
        router.replace("/AuthenticationPage");
      }
    }, 10); // Pequeño retraso para evitar el error de router, ya que demora en iniciar la estructura de router.
  }, [loggedIn]);


  if (!loggedIn) {
    return (
      <>
      
      </>
    )
  }
  
    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        <View style={styles.container}>
          <MatchDisponibility />
          <BuyTicketsButton />
        </View>
        {/*</></View>
        <WhatsAppButton />*/}
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
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
  },
  
});