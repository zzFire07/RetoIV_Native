import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = {
    nombre: 'Pedro',
    email: 'super_pedro@gmail.com',
    cupones: 10
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.infocontainer}>
        <Text style={styles.textinfo}>{User.nombre}</Text>
        <Text style={styles.textinfo}>{User.email}</Text>
        <Text style={styles.textinfo}>{User.cupones}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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
    backgroundColor: '#1bc01b',
  },
  infocontainer: {
     width: '75%',
     height: '60%',
     borderRadius: 15,
     backgroundColor: '#a0ffa0',
     alignItems: 'center'
  },
  textinfo: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default ProfileScreen;