import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { projectPalette } from './src/styles/projectPallete';
import SingleStreak from './src/components/SingleStreak/SingleStreak';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SingleStreak />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: projectPalette.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
