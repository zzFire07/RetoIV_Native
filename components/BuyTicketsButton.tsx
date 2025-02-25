import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";
import { Link } from "expo-router";

export default function BuyTicketsButton(){
    return(
        <View style= {styles.container}>
            <Link href={"/TicketPage"} asChild>
                <TouchableHighlight
                style= {styles.buttonTicketera}
                underlayColor={"black"}
                onPress={() => {}}
            >
                <Text style= {styles.text}>COMPRAR TICKETERA</Text>

                </TouchableHighlight>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
    
    },
    buttonTicketera:{
        width: 150,
        height: 100,
        backgroundColor: "#ca312b",
        borderRadius: 18,
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 300
    }, 
    text:{
        color: "white",
        fontSize: 15,
        alignSelf: "center", 
        justifyContent: "center",
        fontWeight: "bold"

    },
})