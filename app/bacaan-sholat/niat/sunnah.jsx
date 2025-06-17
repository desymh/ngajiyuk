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

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Tahajjud</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatat-tahajjudi rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Tahajjud dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Witir</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ الْوِتْرِ رَكْعَةً لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatal witri rak’atan lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Witir satu rakaat karena Allah Ta’ala.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Istikharah</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatal istikhaarah rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Istikharah dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Taubat</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatat-tawbata rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Taubat dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Tarawih</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatat-taraawiihi rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Tarawih dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Sunnah untuk Kedua Orangtua</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةً لِوَالِدَيَّ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatan liwaalidayya rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah untuk kedua orangtuaku dua rakaat karena Allah Ta’ala.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Niat Sholat Tahiyatul Masjid</Text>
        <Text style={styles.arab}>
          أُصَلِّي سُنَّةَ التَّحِيَّةِ لِلْمَسْجِدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
        </Text>
        <Text style={styles.latin}>
          Usholli sunnatal tahiyyati lilmasjidi rak’ataini lillaahi ta’aalaa.
        </Text>
        <Text style={styles.arti}>
          Aku niat sholat sunnah Tahiyatul Masjid dua rakaat karena Allah Ta’ala.
        </Text>
      </View>

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
