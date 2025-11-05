import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FightScreen({ navigation }) {
  const [result, setResult] = useState('');

  const fightFunc = () => {
    let moveOrc = Math.floor(Math.random() * 6) + 1;
    let movePlayer = Math.floor(Math.random() * 6) + 1;

    if (movePlayer > moveOrc) {
      setResult(`Wygrywasz! Wyrzuciłeś ${movePlayer}, Orc ${moveOrc}`);
    } else if (moveOrc > movePlayer) {
      setResult(`Przegrywasz! Orc wyrzucił ${moveOrc}, Ty ${movePlayer} `);
    } else {
      setResult(`Remis - rzuć ponownie!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🗡️ Bitwa 🗡️</Text>
      <Text style={styles.text}>
        {result || 'Rzuć kością, aby rozpocząć walkę'}
      </Text>

      {!result.includes('Wygrywasz') && (
        <TouchableOpacity style={styles.button} onPress={fightFunc}>
          <Text style={styles.buttonText}>
            {result.includes('Remis') ? 'Walcz ponownie' : 'Walcz!'}
          </Text>
        </TouchableOpacity>
      )}

      {result.includes('Wygrywasz') && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Koniec')}
        >
          <Text style={styles.buttonText}>Dalej →</Text>
        </TouchableOpacity>
      )}
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
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
