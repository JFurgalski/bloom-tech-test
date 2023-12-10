import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { projectPalette } from './src/styles/projectPallete';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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
