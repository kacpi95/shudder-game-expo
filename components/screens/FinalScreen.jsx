import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FinalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wygrywasz/Przegrywasz</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Wyjdź/Zacznij od nowa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
  text: {
    marginBottom: 80,
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
