import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TahiyatAkhir() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tahiyat Akhir</Text>

      <Text style={styles.arab}>
        التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ... وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ...
      </Text>
      <Text style={styles.latin}>
        Attahiyyaatu lillaahi wassalawaatu watthayyibaatu... Asyhadu an laa ilaaha illallaahu wa asyhadu anna Muhammadar rasuulullah. Allaahumma shalli 'alaa Muhammad wa 'alaa aali Muhammad kamaa shallaita 'alaa Ibraahiim wa 'alaa aali Ibraahiim innaka hamiidum majiid...
      </Text>
      <Text style={styles.arti}>
        (Bacaan lengkap Tahiyat Akhir dengan Sholawat Ibrahimiyah)
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fffde7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#e67e22' },
  arab: { fontSize: 26, textAlign: 'center', marginVertical: 20, color: '#34495e' },
  latin: { fontSize: 18, fontStyle: 'italic', marginBottom: 10, color: '#7f8c8d', textAlign: 'center' },
  arti: { fontSize: 16, color: '#2c3e50', textAlign: 'center' },
});
