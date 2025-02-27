import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = {
    nombre: 'Pedro',
    apellido: 'Perez',
    email: 'super_pedro@gmail.com',
    partidos: 10
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <View style={styles.infocontainer}>
        <Text style={styles.text}>Información de la cuenta</Text>
        <Text style={styles.textinfo}>Nombre: {User.nombre} {User.apellido}</Text>
        <Text style={styles.textinfo}>Email: {User.email}</Text>
        <Text style={styles.textinfo}>Partidos disponibles: {User.partidos}</Text>
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
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    marginBottom: 40,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: "bold"
  },
  infocontainer: {
     width: '75%',
     height: '60%',
     borderRadius: 15,
     backgroundColor: '#95d3a1',
     alignItems: 'center'
  },
  textinfo: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 15
  },
  text:{
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  }
});

export default ProfileScreen;