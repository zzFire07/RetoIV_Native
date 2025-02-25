import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";



interface TicketProps {
    id: number;
    name: string;
    onPress: () => void;
}

const TicketComponent: React.FC<TicketProps> = ({id, name, onPress}) => {
    return (
            <TouchableHighlight
                key={id}
                style={styles.button}
                onPress={onPress}
                underlayColor="#333"
            >
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableHighlight>
    );
};

const styles= StyleSheet.create({
    button: {
        backgroundColor: "#00bf63",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: "center",
      },
      buttonText: {
        color: "#111",
        fontSize: 16,
      },
});

export default TicketComponent;