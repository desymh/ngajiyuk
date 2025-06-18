import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const hijaiyahData = [
  { huruf: 'ا', nama: 'Alif' },
  { huruf: 'ب', nama: 'Ba' },
  { huruf: 'ت', nama: 'Ta' },
  { huruf: 'ث', nama: 'Tsa' },
];

export default function GameHijaiyah() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [jawaban, setJawaban] = useState('');

  const current = hijaiyahData[index];

  const cekJawaban = (nama) => {
    if (nama === current.nama) {
      Alert.alert('Benar!', 'Kamu hebat!');
      setIndex((prev) => (prev + 1) % hijaiyahData.length);
    } else {
      Alert.alert('Salah', 'Coba lagi ya!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tebak Huruf Hijaiyah</Text>
      <Text style={styles.huruf}>{current.huruf}</Text>

      <View style={styles.options}>
        {hijaiyahData.map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.button} onPress={() => cekJawaban(item.nama)}>
            <Text style={styles.buttonText}>{item.nama}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.kembali} onPress={() => router.back()}>
        <Text style={styles.kembaliText}>← Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00796B',
  },
  huruf: {
    fontSize: 90,
    color: '#D32F2F',
    marginBottom: 30,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#FFD54F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    margin: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  kembali: {
    marginTop: 40,
  },
  kembaliText: {
    fontSize: 16,
    color: '#555',
  },
});
