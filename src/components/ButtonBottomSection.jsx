import { StyleSheet, View } from 'react-native';
import { Button } from './Button';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 43,
    justifyContent: 'space-between',
  },
});
