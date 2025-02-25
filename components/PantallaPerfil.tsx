import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = {
    nombre: 'Pedro',
    email: 'super_pedro@gmail.com',
    cupones: 10
}

const MiPagina = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.info}>
        <Text style={styles.textinfo}>{User.nombre}</Text>
        <Text style={styles.textinfo}>{User.email}</Text>
        <Text style={styles.textinfo}>{User.cupones}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#1bc01b',
  },
  info: {
     width: '80%',
     height: '70%',
     backgroundColor: '#a0ffa0',
     alignItems: 'center'
  },
  textinfo: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default MiPagina;