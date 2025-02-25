import AuthenticationButton from "./AuthenticationButton";
import React from "react";
import CustomHeader from "./CustomHeader";
import { Text, TouchableOpacity, StyleSheet, View} from "react-native";
import BuyTicketsButton from "./BuyTicketsButton";
import TicketDisponibility from "./TicketDisponibility";
import { useAppContext } from "@/context/AppContext";

export function HomePage() {
  const { loggedIn, setLoggedIn } = useAppContext();
  
    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        <TouchableOpacity style={styles.button} onPress={() => setLoggedIn(!loggedIn)}>
          <Text>{loggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          {!loggedIn && <AuthenticationButton />}
          {loggedIn && (
            <>
              <TicketDisponibility />
              <BuyTicketsButton />
            </>
          )}
        
        </View>
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