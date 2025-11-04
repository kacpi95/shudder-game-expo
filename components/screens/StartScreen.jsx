import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gra paragrafowa</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rozpocznij</Text>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    letterSpacing: 2,
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
