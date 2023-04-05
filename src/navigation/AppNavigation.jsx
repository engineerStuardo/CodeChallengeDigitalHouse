import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Details } from '../screens/Details';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
