import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function NiatMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Jenis Niat</Text>

      <Link href="/bacaan-sholat/niat/wajib" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Niat Sholat Wajib</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/bacaan-sholat/niat/sunnah" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Niat Sholat Sunnah</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffde7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e67e22',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f39c12',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
