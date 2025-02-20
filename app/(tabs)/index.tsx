import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HomePage from '@/components/HomePage';
import TicketPage from '@/components/ui/TicketPage'

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}>
        <TicketPage />
      </ThemedView>
    

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
