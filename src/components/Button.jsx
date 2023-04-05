import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = ({ title, onPress, small }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, small && styles.smallWidth]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#334FFA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '800',
  },
  smallWidth: {
    width: 170,
    height: 50,
  },
});
