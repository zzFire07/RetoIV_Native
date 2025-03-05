import { StyleSheet, Text, View, TouchableHighlight, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function BuyTicketsButton(){
    return(
        <>
            <Link href={"/TicketPage"} asChild>
                <TouchableOpacity
                style= {styles.buttonTicketera}
                >
                    <ImageBackground 
                    source={require("../assets/images/origen-padel.png")} // Reemplaza con tu imagen
                    resizeMode="cover"
                    style={styles.imagecontainer}
                    >
                        <Text style= {styles.text}>Acceder a la tienda</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </Link>
        </>
    )
}

const styles = StyleSheet.create({
    buttonTicketera:{
        width: "60%",
        height: 100,
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 100,
    },
    imagecontainer:{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    text:{
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        width: "50%",
        marginBottom: 10,
        marginRight: 2,
    },
})