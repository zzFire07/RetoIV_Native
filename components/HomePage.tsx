import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Calendar from '@/components/calendar';

export function HomePage() {
    return (
        <View style={styles.container}>
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
      </View>
    );
   
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
  
