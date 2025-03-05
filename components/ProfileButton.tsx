import { StyleSheet, Text, TouchableHighlight } from "react-native";

interface ProfileButtonProps {
  onPress: () => void;
  showInputs: boolean;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ onPress, showInputs }) => {
  return (
    <TouchableHighlight
      style={styles.ProfileButton}
      onPress={onPress}
      underlayColor="#16a016"
    >
      <Text style={styles.text}>{showInputs ? "Guardar" : "Editar Perfil"}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  ProfileButton: {
    width: 200,
    height: 50,
    backgroundColor: '#1bc01b',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center'
  }
});

export default ProfileButton;
