import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Button = ({ title, onPress, small, testId = 'button' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, small && styles.smallWidth]}
      testID={testId}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
