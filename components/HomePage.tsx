<<<<<<< HEAD
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Calendar from '@/components/calendar';


import React from "react";
=======
import { BotonAutenticacion } from "./BotonAutenticacion";
import React, { useState } from "react";
>>>>>>> f7dee20a7bbe8860ead22539eee9bec0fe6ce4a7
import CustomHeader from "./Header";
export function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  
    return (
<<<<<<< HEAD
        <View style={styles.container}>
            <CustomHeader title="Club Ituzaingo" />
            <TouchableHighlight
            style={{
                width: 100,
                height: 50,
                backgroundColor: "black",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Text style={{ color: "white" }}>Iniciar sesión</Text>
            </TouchableHighlight>
            <View>
                <Text>Home</Text>
                
            </View>
        </View>
    );
   
=======
      <>
        <CustomHeader title="Club Ituzaingo" />
        {!loggedIn && <BotonAutenticacion />}
      </>
    );  
>>>>>>> f7dee20a7bbe8860ead22539eee9bec0fe6ce4a7
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",

    },
  });
  
