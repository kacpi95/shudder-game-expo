import { View, StyleSheet, Text } from 'react-native';

export default function ScreenFive({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Z ciemności wyłania się nieznany przeciwnik — jego oczy płoną
        czerwienią, a miecz błyszczy w świetle księżyca. Czas na pojedynek!
        Wszyscy Twoi dotychczasowi wybory prowadzą do tej konfrontacji. Czy
        zwyciężysz?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 60,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 1,
    opacity: 0.9,
  },
});
