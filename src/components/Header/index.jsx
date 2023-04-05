import { Text, View } from 'react-native';

import { styles } from './styles';

export const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text>Ruben Rodriguez</Text>
    </View>
  );
};
