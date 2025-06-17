import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BacaanSholat() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bacaan Sholat</Text>

      <Link href="/bacaan-sholat/niat" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Niat</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/takbiratul-ihram" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Takbiratul Ihram</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/iftitah" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doa Iftitah</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/fatihah" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Al-Fatihah</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/surat" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Surat Pendek (Juz 30)</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/rukuk" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rukuk</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/itidal" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I'tidal</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/sujud" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sujud</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/duduk2sujud" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Duduk Antara Dua Sujud</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/tahiyatawal" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tahiyat Awal</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/tahiyatakhir" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tahiyat Akhir</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/salam" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salam</Text>
        </TouchableOpacity>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fffde7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#d35400',
  },
  button: {
    backgroundColor: '#f39c12',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
