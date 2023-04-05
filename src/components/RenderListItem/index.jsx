import { Image, Text, TouchableOpacity, View } from 'react-native';
import { toLongDate } from '../../utils/DateUtils';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

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
          source={require('../../../assets/Subtract.png')}
          style={styles.arrowRight}
        />
      </View>
    </TouchableOpacity>
  );
};
