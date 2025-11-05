import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FightScreen({ navigation }) {
  const [result, setResult] = useState('');

  const fightFunc = () => {
    let moveOrc = Math.floor(Math.random() * 6) + 1;
    let movePlayer = Math.floor(Math.random() * 6) + 1;

    if (movePlayer > moveOrc) {
      setResult(`Wygrywasz, wyrzuciłeś ${movePlayer} a Orc ${moveOrc}`);
    } else if (moveOrc > movePlayer) {
      setResult(`Przegrywasz, Orc wyrzucił ${moveOrc} a Ty ${movePlayer} `);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fightFunc}>
        <Text style={styles.buttonText}>Walcz</Text>
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
