import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TakbiratulIkhram() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Takbiratul Ikhram</Text>
      
      <Text style={styles.arab}>اللَّهُ أَكْبَرُ</Text>
      <Text style={styles.latin}>Allahu Akbar</Text>
      <Text style={styles.arti}>Allah Maha Besar.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fffde7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#e67e22' },
  arab: { fontSize: 32, textAlign: 'center', marginVertical: 20, color: '#34495e' },
  latin: { fontSize: 18, fontStyle: 'italic', marginBottom: 10, color: '#7f8c8d', textAlign: 'center' },
  arti: { fontSize: 16, color: '#2c3e50', textAlign: 'center' },
});
