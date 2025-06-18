import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailDoa() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>{id}</Text>
      <Text style={styles.isi}>Detail doa untuk: {id}</Text>
      {/* Di sini nanti bisa fetch detail sesuai nama atau ID */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff8dc',
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  isi: {
    fontSize: 18,
    marginTop: 10,
  },
});
