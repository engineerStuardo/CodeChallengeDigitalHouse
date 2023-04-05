import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
