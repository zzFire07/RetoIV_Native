import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Link } from "expo-router";

export default function BuyTicketsButton(){
    return(
        <View>
            <Link href={"/TicketPage"} asChild>
                <TouchableHighlight
                style= {styles.buttonTicketera}
                underlayColor={"black"}
            >
                <Text style= {styles.text}>COMPRAR TICKETERA</Text>

                </TouchableHighlight>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonTicketera:{
        width: 150,
        height: 100,
        backgroundColor: "#ca312b",
        borderRadius: 12,
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 300
    }, 
    text:{
        color: "white",
        fontSize: 16,
        alignSelf: "center", 
        justifyContent: "center",
        fontWeight: "bold",
        textAlign: "center"
    },
})