import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Definir los tipos de las props
interface FooterButtonProps {
  title: string; 
  onPress: () => void; 
}

const FooterButton: React.FC<FooterButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#354d34",
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default FooterButton;
