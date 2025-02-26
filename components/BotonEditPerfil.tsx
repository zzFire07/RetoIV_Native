import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export function BotonPerfil() {
    return (
            <TouchableHighlight
                style={styles.BotonPerfil}
                onPress={() => {}}
            >
                <Text style={styles.text}>Editar Perfil</Text>
            </TouchableHighlight>
    );  
}

const styles = StyleSheet.create({
  BotonPerfil:{
    width: 10,
    height: 10,
    backgroundColor: '#1bc01b',
    borderWidth: 10,
    borderColor: '#000000',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  text:{
    color: '#000000',
    fontSize: 15,
    textAlign: 'center'
}
});