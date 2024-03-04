import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/output.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
