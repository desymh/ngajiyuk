import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-ngajiyuk.png')} style={styles.logo} />
      <Text style={styles.title}>Ngaji Yuk!</Text>
      <Text style={styles.subtitle}>Belajar doa, sholat, dan huruf hijaiyah dengan mudah dan menyenangkan!</Text>

      <Link href="/menu" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mulai Belajar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ffb347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
