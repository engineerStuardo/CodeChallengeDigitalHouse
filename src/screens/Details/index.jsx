import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '../../components/Button';
import { styles } from './styles';

export const Details = ({ navigation, route }) => {
  const { product, image, date, points } = route.params;

  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.productTitle}>{product}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.subtitle}>Detalles del producto:</Text>
        <Text style={styles.dateText}>Comprado el {date}</Text>
        <Text style={styles.subtitle}>Con esta compra acumulaste</Text>
        <Text style={styles.points}>{points.toLocaleString()} puntos</Text>
        <Button title='Aceptar' onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};
