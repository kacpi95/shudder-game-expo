import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './components/screens/StartScreen';
import FightScreen from './components/screens/FightScreen';
import FinalScreen from './components/screens/FinalScreen';
import ScreenOne from './components/screens/ScreenOne';
import ScreenTwo from './components/screens/ScreenTwo';
import ScreenThree from './components/screens/ScreenThree';
import ScreenFour from './components/screens/ScreenFour';
import ScreenFive from './components/screens/ScreenFive';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='Ekran 1' component={ScreenOne} />
        <Stack.Screen name='Ekran 2' component={ScreenTwo} />
        <Stack.Screen name='Ekran 3' component={ScreenThree} />
        <Stack.Screen name='Ekran 4' component={ScreenFour} />
        <Stack.Screen name='Ekran 5' component={ScreenFive} />
        <Stack.Screen name='Bitwa' component={FightScreen} />
        <Stack.Screen name='Koniec' component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
