import { StyleSheet, Text } from 'react-native';

import CustomHeader from '@/components/CustomHeader';
import { Profile } from '@/components/Profile';


export default function TabTwoScreen() {
  return (
    <>
      <CustomHeader title="Club Ituzaingo" />
      <Profile />
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
