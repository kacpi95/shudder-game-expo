import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ScreenOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Noc spowijała opuszczoną wioskę mgłą, a jedynie płomień lampy przy
        chacie rozświetlał wąską drogę. Przed Tobą dwa kierunki: ścieżka wiodąca
        przez ciemny las, gdzie słychać szelest liści… albo stary, opuszczony
        most, który prowadzi w stronę mgieł nad rzeką. Dokąd pójdziesz?
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Przez ciemny las</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Przez opuszczony most</Text>
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
    paddingHorizontal: 30,
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
    bottom: 50,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 12,
    paddingHorizontal: 10,
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
