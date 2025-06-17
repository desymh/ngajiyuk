import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DudukAntaraDuaSujud() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Duduk Diantara Dua Sujud</Text>

      <Text style={styles.arab}>
        رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي
      </Text>
      <Text style={styles.latin}>
        Rabbighfirlii, warhamnii, wajburnii, warfa’nii, wahdinii, wa ‘aafinii, warzuqnii.
      </Text>
      <Text style={styles.arti}>
        Ya Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah aku, angkatlah derajatku, berilah aku petunjuk, berilah kesehatan, dan limpahkanlah rezeki kepadaku.
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
