import { StyleSheet, Text, View } from 'react-native';

import { styles } from './styles';

export const TotalPointsSection = ({ totalPoints }) => {
  return (
    <View>
      <Text style={styles.title}>TUS PUNTOS</Text>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.monthText}>Diciembre</Text>
          <Text style={styles.pointsText}>
            {totalPoints.toLocaleString()} pts
          </Text>
        </View>
      </View>
    </View>
  );
};
