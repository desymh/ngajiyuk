import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Salam() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salam</Text>
      <Text style={styles.arab}>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ</Text>
      <Text style={styles.latin}>Assalamu'alaikum warahmatullahi wabarakatuh</Text>
      <Text style={styles.arti}>Semoga keselamatan, rahmat, dan berkah Allah tercurah untukmu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  arab: {
    fontSize: 32,
    color: '#2c3e50',
    marginBottom: 10,
  },
  latin: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  arti: {
    fontSize: 16,
    color: '#34495e',
  },
});
