import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

export default function MatchDisponibility(){

    const {user} = useUser();

    useEffect(() => {
        setTickets(parseInt(user?.tickets ?? "0"));
    }, [user?.tickets]);
    
    const [tickets, setTickets] = useState(0);


    const cantidadTickets = tickets;

    return (

        <LinearGradient
        colors={['#255E13', '#4DC428']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.LinearGradientContainer}
        >
            <Ionicons name="trophy" size={26} color="white" style={{
                marginLeft: 20,
                marginRight: 12,
                }} 
            />
            <Text style={[styles.text, { marginRight: 12 }]}>Partidos disponibles</Text>
            <Text style={[styles.text, { marginRight: 20 }]}>{cantidadTickets}</Text>
        </LinearGradient>
    )
    
    }

const styles = StyleSheet.create({
    LinearGradientContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50, //Mantener igual que el height del text y el lineHeight
        borderRadius: 25
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        height: 50, //Mantener igual que el height del LinearGradient y el lineHeight
        lineHeight: 50, //Mantener igual que el height del LinearGradient y el height
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center", // For Android
    }
})
