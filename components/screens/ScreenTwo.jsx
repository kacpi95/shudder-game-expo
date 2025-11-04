import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ScreenTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Przemierzając mroczny las, czujesz jak gałęzie haczą o Twoje ubranie.
        Nagle pojawia się rozwidlenie dróg: jedna prowadzi w głąb lasu, gdzie
        czeka tajemnicze światło, druga ku starym ruinom, z których dobiegają
        dziwne dźwięki.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Idź w kierunku światła</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sprawdź stare ruiny</Text>
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
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 150,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
    opacity: 0.8,
  },
});
