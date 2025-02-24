import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";
import { Link } from "expo-router";

export default function BotonComprarTicketera(){
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
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 250
    }, 
    text:{
        color: "black",
        fontSize: 15,
        alignSelf: "center", 
        justifyContent: "center"

    },
})