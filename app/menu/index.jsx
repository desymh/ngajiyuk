import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DoaKu Anak Muslim</Text>
      <Text style={styles.subtitle}>
        Belajar doa harian, bacaan sholat, dan Al-Quran dengan mudah!
      </Text>

      <Link href="/doa-harian" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doa Harian</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bacaan Sholat</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/belajar-quran" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Belajar Al-Quran</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/tentang" asChild>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Tentang Aplikasi</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F0FFF0'
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#00796B' },
  subtitle: { fontSize: 16, marginBottom: 40, textAlign: 'center' },
  button: {
    backgroundColor: '#00796B', padding: 15, borderRadius: 10, marginBottom: 15, width: 200, alignItems: 'center'
  },
  buttonSecondary: {
    backgroundColor: '#B2DFDB', padding: 15, borderRadius: 10, marginBottom: 15, width: 200, alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 16 }
});
