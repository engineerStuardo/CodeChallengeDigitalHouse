import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { toLongDate } from '../utils/DateUtils';
import { useNavigation } from '@react-navigation/native';

export const RenderListItem = ({
  product,
  image,
  createdAt,
  points,
  isRedemption,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', {
          product: product,
          image: image,
          date: toLongDate(createdAt),
          points: points,
        })
      }
    >
      <View style={styles.leftContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.product} numberOfLines={1}>
            {product}
          </Text>
          <Text>{toLongDate(createdAt)}</Text>
        </View>
      </View>
      <View style={styles.pointContainer}>
        <Text style={isRedemption ? styles.red : styles.green}>
          {isRedemption ? '-' : '+'}
        </Text>
        <Text>{points.toLocaleString()}</Text>
        <Image
          source={require('../../assets/Subtract.png')}
          style={styles.arrowRight}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 23,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  red: {
    color: '#FF0000',
    fontWeight: 800,
  },
  green: {
    color: '#00B833',
    fontWeight: 800,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 11,
  },
  arrowRight: {
    width: 10,
    height: 10,
    marginLeft: 23,
  },
  product: {
    fontWeight: '800',
    width: 175,
  },
});
