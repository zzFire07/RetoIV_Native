import { StyleSheet } from 'react-native';

import CustomHeader from '@/components/CustomHeader';
import ProfileScreen from '@/app/ProfileScreen';
import { useAppContext } from '@/context/AppContext';


export default function TabTwoScreen() {
  return (
    <>
      <CustomHeader title="Club Ituzaingo" />
       <ProfileScreen />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
