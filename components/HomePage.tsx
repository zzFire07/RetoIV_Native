import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export function HomePage() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
            style={{
                width: 100,
                height: 100,
                backgroundColor: "black",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Text style={{ color: "black" }}>Iniciar sesión</Text>
            </TouchableHighlight>
      </View>
    );
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,

    },
  });
  
