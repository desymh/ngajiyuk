import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function DaftarSuratPendek() {
  const [surat, setSurat] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSurat = async () => {
      try {
        const response = await axios.get('https://equran.id/api/surat');
        const data = response.data;
        const suratPendek = data.filter((item) => item.nomor >= 78 && item.nomor <= 114);
        setSurat(suratPendek.reverse()); // urutan mundur dari An-Naas
      } catch (err) {
        console.error('Gagal memuat surat:', err);
      } finally {
        setLoading(false);
      }
    };

    getSurat();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="orange" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={surat}
      keyExtractor={(item) => item.nomor.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/bacaan-sholat/surat/${item.nomor}`)}
        >
          <Text style={styles.nama}>{item.nama_latin}</Text>
          <Text style={styles.detail}>{item.arti} - {item.jumlah_ayat} Ayat</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fffaf0',
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
  },
  nama: {
    fontSize: 18,
    color: '#d35400',
    fontWeight: 'bold',
  },
  detail: {
    color: '#555',
  },
});
