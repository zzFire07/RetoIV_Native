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
        width: 153,
        height: 79,
        backgroundColor: "#ca312b",
        borderRadius: 20,
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 300,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"
    }, 
    text:{
        color: "white",
        fontSize: 16,
        alignSelf: "center", 
        justifyContent: "center",
        fontWeight: "800",
        textAlign: "center"
    },
})