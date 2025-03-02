import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import LoginButton from "@/components/LoginButton";
import RegisterText from "@/components/RegisterText";
import BackgroundContainer from "@/components/BackgroundContainer";
import LogoHeader from "@/components/LogoHeader";

export function HomePage2(){
   
    return(
        <BackgroundContainer>
            <View style={styles.container}>
                <LogoHeader/>
                <View style = {styles.content}>
                    <LoginButton/>
                    <RegisterText/>
                </View>
            </View>
        </BackgroundContainer>
    )
}

const styles = StyleSheet.create({

      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      content:{
        flex:1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 150
      },
})
export default HomePage2