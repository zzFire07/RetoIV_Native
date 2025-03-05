import { StyleSheet, View } from "react-native";
import BuyTicketsButton from "@/components/BuyTicketsButton"
import MatchDisponibility from "@/components/MatchDisponibility";

export function MainPageButtons(){
    return(
        <View style={styles.container}>
            <MatchDisponibility/>
            <BuyTicketsButton/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
    }
});