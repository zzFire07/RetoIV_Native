import React, { useEffect } from "react";
import CustomHeader from "./CustomHeader";
import { StyleSheet, View } from "react-native";
import BuyTicketsButton from "./BuyTicketsButton";
import MatchDisponibility from "./MatchDisponibility";
import { useAuth } from "@/context/AuthContext";

export function HomePage() {
  const { loggedIn } = useAuth();

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
        {/*
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
  fullpage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  
});