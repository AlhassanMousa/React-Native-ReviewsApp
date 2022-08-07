//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';
import Navigator from './routes/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  let [fontsLoaded] = useFonts({  
    'Nunito-Regular': require('./assets/Nunito-Regular.ttf'), 
    'Nunito-Bold': require('./assets/Nunito-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return   <AppLoading onError={console.warn} />
  }
  return (
      <Navigator />
  );
}

