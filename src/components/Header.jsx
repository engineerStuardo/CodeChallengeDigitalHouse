import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text>Ruben Rodriguez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 800,
  },
});
