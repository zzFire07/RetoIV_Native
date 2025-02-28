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