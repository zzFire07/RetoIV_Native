import MatchDisponibility from '@/components/MatchDisponibility';
import ProfileButton from '@/components/ProfileButton';
import SignOffButton from '@/components/SignOffButton';
import { useUser } from '@/context/UserContext';
import apiService from '@/services/apiService';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ProfileScreen = () => {

  const { user, setUser } = useUser();

  const [showInputs, setShowInputs] = useState(false);
  const [newNumber, setNewNumber] = useState("");

  const actualizarUsuario = async () => {

  
    // Validar que el teléfono solo contenga números o vacio.
    const telefonoValido = /^$|^[0-9]+$/.test(newNumber);
  
    if (!telefonoValido) {
      setNewNumber("");
      alert('El teléfono solo puede contener números o estar vacio.');
      return;
    }
  
    // Si ambas validaciones son correctas, actualizamos el usuario
    if(user){
      if(user.phone_number !== newNumber)
      {
        setUser({
          ...user,
          phone_number: newNumber,
        });
        try {
          console.log("Actualizando el teléfono:", newNumber);
          console.log("Usuario:", user.user_id);
          const result = await apiService.addPhoneNumber(Number(user.user_id), newNumber);
          console.log("Resultado de la actualización del teléfono:", result);
          setNewNumber("");
        } catch (error) {
          console.error("Error al actualizar el teléfono:", error);
        }
      }
    }
  };

  const editarPerfil = () => {
    if (showInputs) {
      actualizarUsuario();
    }
    setShowInputs(!showInputs);
  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          <View style={styles.infocontainer}>
          <Text style={styles.title}>Mi Perfil</Text>
              <View style={styles.textContainer}>
                <Text style={styles.textinfo}>Nombre</Text>
                <Text style={styles.textInline}>{user?.name}</Text>
              </View>
      
            {showInputs ? (
              <View style={styles.textContainer}>
                <Text style={styles.textinfo}>Teléfono</Text>
                <TextInput
                  style={[styles.inputInline, {backgroundColor: 'white'}]}
                  placeholder="Nuevo número"
                  value={newNumber}
                  onChangeText={setNewNumber}
                  keyboardType='numeric'
                  />
              </View>
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.textinfo}>Teléfono</Text>
                <Text style={styles.textInline}>{user?.phone_number}</Text>
              </View>
            )}

            <View style={styles.textContainer}>
              <Text style={styles.textinfo}>E-Mail</Text>
              <Text style={styles.textInline}>{user?.email}</Text>
            </View>

            <View style={styles.matchDisponibility}>
              <MatchDisponibility/>
            </View>
            <View style={styles.profileButton}>
              <ProfileButton onPress={editarPerfil} showInputs={showInputs} />
            </View>
            <View style={styles.signOffButton}>
              <SignOffButton />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );  
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",
    marginBottom: 20,
  },
  infocontainer: {
    width: '75%',
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    padding: 25,
    marginTop: "10%",
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  textinfo: {
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  textInline: {
    height: 40,
    lineHeight: 40,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },
  inputInline: {
    height: 40,
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
  },
  matchDisponibility: {
    marginBottom: 25,
    marginTop: 5,
  },
  profileButton: {
    marginBottom: 25,
  },
  signOffButton: {
    marginBottom: 5,
  },
});

export default ProfileScreen;
