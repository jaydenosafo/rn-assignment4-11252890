import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import LogIn from './Components/LogIn';
import {useRouter} from 'expo-router';

export default function App() {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}


