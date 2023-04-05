import { FlatList, StyleSheet, Text, View } from 'react-native';

import { RenderListItem } from './RenderListItem';

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

const styles = StyleSheet.create({
  list: {
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
    marginBottom: 20,
    marginTop: 20,
  },
});
