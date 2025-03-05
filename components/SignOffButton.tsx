// hacer boton de cerrar sesion con firebase y el contexto
//
import { Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { auth } from "@/firebaseConfig";


export function SignOffButton() {

  const handleSignOff = async () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: async () => {
            await auth.signOut();
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOff}>
      <Text style={styles.buttonText}>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 20,
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"
    },
    
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    }
    })
    
export default SignOffButton;