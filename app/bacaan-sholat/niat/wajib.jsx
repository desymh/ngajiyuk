import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function NiatWajib() {
  const niatWajib = [
    {
      judul: 'Niat Sholat Subuh',
      arab: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Ushalli fardhas subhi rak‘ataini mustaqbilal qiblati adā-an lillāhi ta‘ālā.',
      arti: 'Aku niat shalat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta’ala.'
    },
    {
      judul: 'Niat Sholat Dzuhur',
      arab: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Ushalli fardhadh dhuhri arba‘a raka‘ātin mustaqbilal qiblati adā-an lillāhi ta‘ālā.',
      arti: 'Aku niat shalat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta’ala.'
    },
    {
      judul: 'Niat Sholat Ashar',
      arab: 'أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Ushalli fardhal ‘ashri arba‘a raka‘ātin mustaqbilal qiblati adā-an lillāhi ta‘ālā.',
      arti: 'Aku niat shalat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta’ala.'
    },
    {
      judul: 'Niat Sholat Maghrib',
      arab: 'أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Ushalli fardhal maghribi tsalātsa raka‘ātin mustaqbilal qiblati adā-an lillāhi ta‘ālā.',
      arti: 'Aku niat shalat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta’ala.'
    },
    {
      judul: 'Niat Sholat Isya',
      arab: 'أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Ushalli fardhal ‘isyaa’i arba‘a raka‘ātin mustaqbilal qiblati adā-an lillāhi ta‘ālā.',
      arti: 'Aku niat shalat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta’ala.'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {niatWajib.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{item.judul}</Text>
          <Text style={styles.arab}>{item.arab}</Text>
          <Text style={styles.latin}>{item.latin}</Text>
          <Text style={styles.arti}>{item.arti}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fffde7' },
  card: { backgroundColor: '#fff', margin: 10, padding: 15, borderRadius: 10, elevation: 3 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#e67e22', marginBottom: 10 },
  arab: { fontSize: 24, textAlign: 'right', marginVertical: 10, color: '#34495e' },
  latin: { fontStyle: 'italic', marginBottom: 10, color: '#7f8c8d' },
  arti: { fontSize: 16, color: '#2c3e50' },
});
