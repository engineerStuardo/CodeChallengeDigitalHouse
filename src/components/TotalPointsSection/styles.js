import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#334FFA',
    width: 286,
    height: 143,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  monthText: {
    position: 'absolute',
    left: 19,
    top: 21,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 800,
    textTransform: 'capitalize',
  },
  pointsText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 800,
  },
});
