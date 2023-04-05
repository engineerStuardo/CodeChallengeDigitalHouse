import { SafeAreaView, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { ButtonBottomSection } from '../components/ButtonBottomSection';
import { TotalPointsSection } from '../components/TotalPointsSection';
import { MovementSection } from '../components/MovementSection';
import { useHome } from '../hooks/useHome';

export const Home = () => {
  const { totalPoints, filteredProducts, filter, showAll } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TotalPointsSection totalPoints={totalPoints} />
      <MovementSection filteredProducts={filteredProducts} />
      <ButtonBottomSection filter={filter} showAll={showAll} />
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
});
