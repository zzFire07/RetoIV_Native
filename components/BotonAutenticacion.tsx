import { StyleSheet, View, Text, TouchableHighlight, Alert } from "react-native";
import { Link } from "expo-router";

export function BotonAutenticacion() {
    return (
        <View style={styles.container}>
          <Link href="/TicketPage" asChild>
            <TouchableHighlight
                style={styles.ButtonIniciarSesion}
                underlayColor={"black"}
                onPress={() => {}}
            >
                <Text style={styles.text}>INICIAR SESIÓN / REGISTRARSE</Text>
            </TouchableHighlight>
          </Link>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",

    },
    ButtonIniciarSesion:{
      width:150,
      height: 100,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "black",
      alignSelf: "center",
      justifyContent: "center",
      overflow: "hidden"
    },
    text:{
      color: "black",
      fontSize: 15,
      alignSelf: "center", 
      justifyContent: "center"

  }
  });