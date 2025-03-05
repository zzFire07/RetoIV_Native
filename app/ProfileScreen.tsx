import ProfileButton from '@/components/ProfileButton';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const User = {
    nombre: 'Pedro',
    apellido: 'Perez',
    email: 'super_pedro@gmail.com',
    partidos: 10
}

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
    }
  };

  const editarPerfil = () => {
    if (showInputs) {
      actualizarUsuario();
      setNuevoNombre('');
      setNuevoApellido('');
      setNuevoNumero('');
    }
    setShowInputs(!showInputs);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <View style={styles.infocontainer}>
        <Text style={styles.text}>Información de la cuenta</Text>

        {showInputs ? (
          <>
            <TextInput
              style={styles.inputInline}
              placeholder="Nuevo nombre"
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
            />
            <TextInput
              style={styles.inputInline}
              placeholder="Nuevo apellido"
              value={nuevoApellido}
              onChangeText={setNuevoApellido}
            />
          </>
        ) : (
          <Text style={styles.textinfo}>Nombre: {usuario.nombre} {usuario.apellido}</Text>
        )}
  
        {showInputs ? (
          <TextInput
            style={styles.inputInline}
            placeholder="Nuevo número"
            value={nuevoNumero}
            onChangeText={setNuevoNumero}
            keyboardType='numeric'
          />
        ) : (
          <Text style={styles.textinfo}>Número: {usuario.numero}</Text>
        )}
  
        <Text style={styles.textinfo}>Email: {usuario.email}</Text>
        <Text style={styles.textinfo}>Partidos disponibles: {usuario.partidos}</Text>
  
        <ProfileButton onPress={editarPerfil} showInputs={showInputs} />
  
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
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
  ProfileSaveButton: {
    width: 200,
    height: 50,
    backgroundColor: '#1bc01b',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textSave: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center'
  },
  inputInline: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10
  }  
});

export default ProfileScreen;
