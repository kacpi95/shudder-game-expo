import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FightScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Walcz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
