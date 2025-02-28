import ProfileButton from '@/components/ProfileButton';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [usuario, setUsuario] = useState({
    nombre: 'Pedro',
    apellido: 'Perez',
    numero: '099123123',
    email: 'super_pedro@gmail.com',
    partidos: 10
  });

  const [showInputs, setShowInputs] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoApellido, setNuevoApellido] = useState('');
  const [nuevoNumero, setNuevoNumero] = useState('');

  const actualizarUsuario = () => {
    if (nuevoNombre.trim() !== '' && nuevoNumero.trim() !== '') {
      setUsuario(prevUsuario => ({
        ...prevUsuario,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        numero: nuevoNumero
      }));
      setShowInputs(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <View style={styles.infocontainer}>
        <Text style={styles.text}>Información de la cuenta</Text>
        <Text style={styles.textinfo}>Nombre: {usuario.nombre} {usuario.apellido}</Text>
        <Text style={styles.textinfo}>Número: {usuario.numero}</Text>
        <Text style={styles.textinfo}>Email: {usuario.email}</Text>
        <Text style={styles.textinfo}>Partidos disponibles: {usuario.partidos}</Text>

        <ProfileButton onPress={() => setShowInputs(!showInputs)} />

        {showInputs && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nuevo nombre"
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Nuevo apellido"
              value={nuevoApellido}
              onChangeText={setNuevoApellido}
            />
            <TextInput
              style={styles.input}
              placeholder="Nuevo número"
              value={nuevoNumero}
              onChangeText={setNuevoNumero}
              inputMode='numeric'
            />
            <Button title="Guardar" onPress={actualizarUsuario} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: "bold"
  },
  infocontainer: {
    width: '75%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#95d3a1',
    alignItems: 'center'
  },
  textinfo: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  }
});

export default ProfileScreen;
