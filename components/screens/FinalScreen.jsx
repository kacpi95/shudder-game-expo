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

const styles = StyleSheet.create({});
