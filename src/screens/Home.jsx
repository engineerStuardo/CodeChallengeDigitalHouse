import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products'
      );
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      calculateTotalPoints();
    }
  }, [products]);

  function toLongDate(dateString) {
    const date = new Date(dateString);
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const formattedDate = `${date.getDate()} de ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;

    return formattedDate;
  }

  const calculateTotalPoints = () => {
    const total = products.reduce((accumulator, currentValue) => {
      if (currentValue.is_redemption) {
        return accumulator;
      }
      return accumulator + currentValue.points;
    }, 0);

    setTotalPoints(total);
  };

  const filter = type => {
    if (type === 'Ganados') {
      setFilteredProducts(products.filter(item => !item.is_redemption));
      setShowAll(true);
      return;
    }

    if (type === 'Canjeados') {
      setFilteredProducts(products.filter(item => item.is_redemption));
      setShowAll(true);
      return;
    }

    setShowAll(false);
    setFilteredProducts(products);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*  */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: 800 }}>
          Bienvenido de vuelta!
        </Text>
        <Text>Ruben Rodriguez</Text>
      </View>
      {/*  */}
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '800',
            color: '#9B9898',
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          TUS PUNTOS
        </Text>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#334FFA',
              width: 286,
              height: 143,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                position: 'absolute',
                left: 19,
                top: 21,
                color: '#FFF',
                fontSize: 16,
                fontWeight: 800,
                textTransform: 'capitalize',
              }}
            >
              Diciembre
            </Text>
            <Text style={{ color: '#fff', fontSize: 32, fontWeight: 800 }}>
              {totalPoints.toLocaleString()} pts
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '800',
            color: '#9B9898',
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          TUS MOVIMIENTOS
        </Text>
        <FlatList
          style={styles.list}
          data={filteredProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Details', {
                  product: item.product,
                  image: item.image,
                  date: toLongDate(item.createdAt),
                  points: item.points,
                })
              }
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 10,
                    marginRight: 11,
                  }}
                />
                <View>
                  <Text
                    style={{ fontWeight: '800', width: 175 }}
                    numberOfLines={1}
                  >
                    {item.product}
                  </Text>
                  <Text>{toLongDate(item.createdAt)}</Text>
                </View>
              </View>
              <View style={styles.pointContainer}>
                <Text style={item.is_redemption ? styles.red : styles.green}>
                  {item.is_redemption ? '-' : '+'}
                </Text>
                <Text>{item.points.toLocaleString()}</Text>
                <Image
                  source={require('../../assets/Subtract.png')}
                  style={{ width: 10, height: 10, marginLeft: 23 }}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 43,
          justifyContent: 'space-between',
        }}
      >
        {showAll ? (
          <TouchableOpacity
            onPress={() => filter('Todos')}
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#334FFA',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '800' }}>
              Todos
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => filter('Ganados')}
              style={{
                width: 170,
                height: 50,
                backgroundColor: '#334FFA',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '800' }}>
                Ganados
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => filter('Canjeados')}
              style={{
                width: 170,
                height: 50,
                backgroundColor: '#334FFA',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '800' }}>
                Canjeados
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  list: {
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
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
});
