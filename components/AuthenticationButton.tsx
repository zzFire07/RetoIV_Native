import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado con éxito");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{"Autenticarse"}</Text>

      <View style={styles.inputView}>
        <Text style={styles.textView}>Correo Electronico</Text>
        <TextInput style={styles.input} placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.textView}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      </View>
      
      <View style={styles.button}>
        <Button color={"white"} title={"Iniciar Sesión"} onPress={handleLogin} />
      </View>
      <View style={styles.button}>
        <Button color={"white"} title={"Registrarse"} onPress={handleRegister} />
      </View>

      {error ? <Text style={{ color: "red", fontSize: 16}}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 80,
    marginTop: 40
  },
  inputView: {
    width: "60%",
    marginBottom: 40
  },
  textView:{
    marginBottom: 6,
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    height: 50,
    backgroundColor: "#f9f9f9",
    width: "100%"
  },
  button: {
    backgroundColor: "#ca312b",
    borderRadius: 10,
    marginBottom: 30,
    color: "white",
    width: "40%"
  }
});
