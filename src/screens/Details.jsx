import { Image, Text, TouchableOpacity, View } from 'react-native';

export const Details = ({ navigation, route }) => {
  const { product, image, date, points } = route.params;

  return (
    <View>
      <View
        style={{
          backgroundColor: '#CFD6FF',
          height: 150,
          paddingTop: 102,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 800 }}>{product}</Text>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 19 }}>
        <View
          style={{
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
          }}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              marginRight: 11,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: '#9B9898',
            marginTop: 32,
            marginBottom: 19,
          }}
        >
          Detalles del producto:
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 800 }}>
          Comprado el {date}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: '#9B9898',
            marginTop: 20,
            marginBottom: 32,
          }}
        >
          Con esta compra acumulaste
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 800, marginBottom: 47 }}>
          {points.toLocaleString()} puntos
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
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
            Canjeados
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
