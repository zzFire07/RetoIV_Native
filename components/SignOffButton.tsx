// hacer boton de cerrar sesion con firebase y el contexto
//
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";


export function SignOffButton() {
  const { setLoggedIn } = useAuth();
  const router = useRouter();

  const handleSignOff = async () => {
    await auth.signOut();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOff}>
      <Text style={styles.buttonText}>Cerrar Sesión</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#255E13",
        padding: 10,
        borderRadius: 20,
        width: 270,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
    },
    
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
    })
    
export default SignOffButton;