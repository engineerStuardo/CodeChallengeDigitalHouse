import { FlatList, StyleSheet, Text, View } from 'react-native';

import { RenderListItem } from '../RenderListItem';
import { styles } from './styles';

export const MovementSection = ({ filteredProducts }) => {
  return (
    <View>
      <Text style={styles.title}>TUS MOVIMIENTOS</Text>
      <FlatList
        style={styles.list}
        data={filteredProducts}
        renderItem={({ item }) => (
          <RenderListItem
            product={item.product}
            image={item.image}
            createdAt={item.createdAt}
            points={item.points}
            isRedemption={item.is_redemption}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
