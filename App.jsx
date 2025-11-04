import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './components/screens/StartScreen';
import FightScreen from './components/screens/FightScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='Battle' component={FightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
