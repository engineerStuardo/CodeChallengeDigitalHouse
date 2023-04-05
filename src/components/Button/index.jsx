import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

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
