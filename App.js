import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/navigation/AppNavigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style='auto' />
    </>
  );
}
