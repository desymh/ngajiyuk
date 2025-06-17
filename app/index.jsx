import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuUtama() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-ngajiyuk.png')} style={styles.logo} />

      <Text style={styles.title}>🌟 Ngaji Yuk! 🌟</Text>
      <Text style={styles.subtitle}>
        Belajar doa, sholat, dan huruf hijaiyah dengan cara yang menyenangkan!
      </Text>

      {/* Tombol ke fitur belajar */}
      <Link href="/fitur" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🎉 Mulai Belajar 🎉</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.footer}>Versi Anak-anak 👧🧒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c3483',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f9a825',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#888',
  },
});
