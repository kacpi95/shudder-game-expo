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

const styles = StyleSheet.create({});
