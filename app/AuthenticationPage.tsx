import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import LoginButton from "@/components/LoginButton";
import RegisterText from "@/components/RegisterText";
import BackgroundContainer from "@/components/BackgroundContainer";
import LogoHomePage from "@/components/LogoHomePage";

export function AuthenticationPage(){
   
    return(
        <BackgroundContainer>
            <View style={styles.container}>
                <LogoHomePage/>
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
        alignItems: "center",
        height: "100%",

      },
      content: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "30%"
      },
})
export default AuthenticationPage;