import { StyleSheet, View, Text, TouchableHighlight, Alert } from "react-native";

export function BotonAutenticacion() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.ButtonIniciarSesion}
                underlayColor={"black"}
                onPress={() => Alert.alert('Iniciar sesión / Registrarse')}
            >
                <Text style={styles.text}>INICIAR SESIÓN / REGISTRARSE</Text>
            </TouchableHighlight>
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