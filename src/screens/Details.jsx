import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/Button';

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

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#CFD6FF',
    height: 150,
    paddingTop: 102,
    paddingLeft: 20,
    paddingRight: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 800,
  },
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 19,
  },
  imageContainer: {
    width: 353,
    height: 350,
    borderBottomWidth: 0.05,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.56,
    shadowRadius: 1.68,
    elevation: 11,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 11,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 800,
    color: '#9B9898',
    marginTop: 20,
    marginBottom: 32,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 800,
  },
  points: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 47,
  },
});
