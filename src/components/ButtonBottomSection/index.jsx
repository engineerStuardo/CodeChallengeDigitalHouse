import { View } from 'react-native';
import { Button } from '../Button';

import { styles } from './styles';

export const ButtonBottomSection = ({ filter, showAll }) => {
  return (
    <View style={styles.container}>
      {showAll ? (
        <Button title='Todos' onPress={() => filter('Todos')} />
      ) : (
        <>
          <Button title='Ganados' onPress={() => filter('Ganados')} small />
          <Button title='Canjeados' onPress={() => filter('Canjeados')} small />
        </>
      )}
    </View>
  );
};
