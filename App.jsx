import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './components/screens/StartScreen';
import FightScreen from './components/screens/FightScreen';
import FinalScreen from './components/screens/FinalScreen';
import ScreenOne from './components/screens/ScreenOne';
import ScreenTwo from './components/screens/ScreenTwo';
import ScreenThree from './components/screens/ScreenThree';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={ScreenThree} />
        <Stack.Screen name='Battle' component={FightScreen} />
        <Stack.Screen name='The End' component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
