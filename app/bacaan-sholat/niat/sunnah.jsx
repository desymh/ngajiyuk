import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function NiatSunnah() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Dhuha</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatad dhuhaa rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Dhuha dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

      {/* Nanti kita tambahkan Tahajjud, Witir, dll */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffde7',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e67e22',
    marginBottom: 10,
  },
  arab: {
    fontSize: 24,
    textAlign: 'right',
    marginVertical: 10,
    color: '#34495e',
  },
  latin: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#7f8c8d',
  },
  arti: {
    fontSize: 16,
    color: '#2c3e50',
  },
});
