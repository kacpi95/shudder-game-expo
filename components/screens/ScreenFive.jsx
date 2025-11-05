import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ScreenFive({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Z ciemności wyłania się nieznany przeciwnik — jego oczy płoną
        czerwienią, a miecz błyszczy w świetle księżyca. Czas na pojedynek!
        Wszyscy Twoi dotychczasowi wybory prowadzą do tej konfrontacji. Czy
        zwyciężysz?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bitwa')}
        >
          <Text style={styles.buttonText}>Walcz</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 150,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
