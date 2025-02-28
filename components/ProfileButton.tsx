import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

interface ProfileButtonProps {
  onPress: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ onPress }) => {
  return (
    <TouchableHighlight
      style={styles.ProfileButton}
      onPress={onPress}
      underlayColor="#16a016"
    >
      <Text style={styles.text}>Editar Perfil</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  ProfileButton: {
    width: 200,
    height: 50,
    backgroundColor: '#1bc01b',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 35,
    position: "absolute",
    bottom: '5%',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 50,
  },
  text: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center'
  }
});

export default ProfileButton;
