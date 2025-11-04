import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ScreenThree({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Most skrzypi pod Twoimi stopami. Mgła gęstnieje, a z oddali słychać jęki
        wody. Za mostem dostrzegasz wejście do opuszczonej wieży, której okna
        świecą dziwnym światłem.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ekran 5')}
        >
          <Text style={styles.buttonText}>Wejdź do wieży</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ekran 1')}
        >
          <Text style={styles.buttonText}>Wracaj do wioski</Text>
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
