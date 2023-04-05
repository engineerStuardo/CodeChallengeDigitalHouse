import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';

import { styles } from './styles';

export const ButtonBottomSection = ({ filter, showAll }) => {
  return (
    <View style={styles.container}>
      {showAll ? (
        <Button
          testId='todos-button'
          title='Todos'
          onPress={() => filter('Todos')}
        />
      ) : (
        <>
          <Button
            testId='ganados-button'
            title='Ganados'
            onPress={() => filter('Ganados')}
            small
          />
          <Button
            testId='canjeados-button'
            title='Canjeados'
            onPress={() => filter('Canjeados')}
            small
          />
        </>
      )}
    </View>
  );
};
