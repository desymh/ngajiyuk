import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetailSurat() {
  const { id } = useLocalSearchParams();
  const [surat, setSurat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`https://equran.id/api/surat/${id}`);
        setSurat(response.data);
      } catch (err) {
        console.error('Gagal memuat detail surat:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="orange" style={{ marginTop: 50 }} />;
  if (!surat) return <Text style={{ marginTop: 20, textAlign: 'center' }}>Surat tidak ditemukan.</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{surat.nama_latin} ({surat.nama})</Text>
      <Text style={styles.sub}>{surat.arti} - {surat.jumlah_ayat} Ayat</Text>
      <Text style={styles.desc}>{surat.deskripsi}</Text>

      {surat.ayat.map((ayat) => (
        <View key={ayat.nomor} style={styles.ayatBox}>
          <Text style={styles.arab}>{ayat.ar}</Text>
          <Text style={styles.arti}>{ayat.idn}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fffefc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d35400',
    textAlign: 'center',
    marginBottom: 5,
  },
  sub: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#7f8c8d',
  },
  desc: {
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
  },
  ayatBox: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fffaf0',
    borderRadius: 10,
  },
  arab: {
    fontSize: 22,
    textAlign: 'right',
    color: '#2c3e50',
  },
  arti: {
    marginTop: 5,
    color: '#555',
  },
});
