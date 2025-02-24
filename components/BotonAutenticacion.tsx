import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { app } from "../firebaseConfig"; // Ajusta la ruta según tu proyecto
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

// Necesario para la autenticación en iOS
WebBrowser.maybeCompleteAuthSession();

const BotonAutenticacion: React.FC = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "TU_CLIENT_ID_WEB.apps.googleusercontent.com", // Reemplázalo con tu Client ID de Google
    iosClientId: "TU_CLIENT_ID_IOS.apps.googleusercontent.com", // Para iOS
    androidClientId: "TU_CLIENT_ID_ANDROID.apps.googleusercontent.com", // Para Android
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      iniciarSesionConGoogle(id_token);
    }
  }, [response]);

  const iniciarSesionConGoogle = async (idToken: string) => {
    try {
      const auth = getAuth(app);
      const credential = GoogleAuthProvider.credential(idToken);
      const { user } = await signInWithCredential(auth, credential);
      const token = await user.getIdToken();

      const apiResponse = await fetch("http://127.0.0.1:8000/protected", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        Alert.alert(`Bienvenido, ${user.displayName}`, "Acceso autorizado.");
      } else {
        Alert.alert("Acceso denegado", "Token inválido.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      Alert.alert("Error", "Hubo un problema al iniciar sesión con Google.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.subtitle}>Ingrese con Google para continuar</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotonAutenticacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4285F4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
