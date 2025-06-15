import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function PilihSholat() {
  const router = useRouter();

  const sholatList = ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Pilih Sholat</Text>
      {sholatList.map((sholat, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => router.push(`/bacaan-sholat/${sholat.toLowerCase()}`)}
        >
          <Text style={styles.buttonText}>{sholat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: '#fffde7',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#e67e22',
  },
  button: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
