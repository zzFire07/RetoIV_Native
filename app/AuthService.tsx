import auth from '@react-native-firebase/auth';
import { useAppContext } from '../context/AuthContext';

export const useAuthService = () => {
  const { setToken, logOut } = useAppContext();

  const logInWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
      return userCredential.user;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  };

  const logOutUser = async () => {
    await auth().signOut();
    await logOut();
  };

  return { logInWithEmail, logOutUser };
};
