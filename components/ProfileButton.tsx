import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from "react-native";

interface ProfileButtonProps {
  onPress: () => void;
  showInputs: boolean;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ onPress, showInputs }) => {
  return (
  <TouchableOpacity
    onPress={onPress}
  >
    <LinearGradient
      colors={['#9FCEAB', '#4EA765']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.LinearGradientContainer}
    >
        
        {showInputs ? (
          <Text style={styles.text}>Guardar</Text>
        ) : (
          <Text style={styles.text}>Editar perfil</Text>
        )}
    </LinearGradient>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  LinearGradientContainer:{
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default ProfileButton;
