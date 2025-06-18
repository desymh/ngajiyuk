import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mapping gambar berdasarkan judul
const imageMap = {
  'Doa Sebelum Tidur': require('../../assets/sebelum_tidur.png'),
  'Doa Bangun Tidur': require('../../assets/bangun_tidur.png'),
  'Doa Masuk Kamar Mandi': require('../../assets/masuk_toilet.png'),
  'Doa Keluar Kamar Mandi': require('../../assets/keluar_toilet.png'),
  'Doa Sebelum Belajar': require('../../assets/sebelum_belajar.png'),
  'Doa Sesudah Belajar': require('../../assets/sesudah_belajar.png'),
  'Doa Ketika Bercermin': require('../../assets/bercermin.png'),
  'Doa Masuk Rumah': require('../../assets/masuk_rumah.png'),
  'Doa Keluar Rumah': require('../../assets/keluar_rumah.png'),
  'Doa Setelah Membaca Al-Quran': require('../../assets/sesudah_ngaji.png'),
  'Doa Sebelum Membaca Al-Quran': require('../../assets/sebelum_ngaji.png'),
  'Doa Memohon Ilmu Yang Bermanfaat': require('../../assets/ilmu.png'),
  'Doa Sebelum Wudhu': require('../../assets/sebelum-w.png'),
  'Doa Setelah Wudhu': require('../../assets/sesudah-w.png'),
  'Doa Hendak Bepergian': require('../../assets/bepergian.png'),
  'Doa Menyambut Pagi hari': require('../../assets/pagi.png'),
  'Doa Menyambut Sore Hari': require('../../assets/sore.png'),
  'Doa Sebelum Wudhu': require('../../assets/sebelum-w.png'),
  'Doa Memohon Rezeki': require('../../assets/rezeki.png'),
  'Doa Selamat dari Kedengkian': require('../../assets/dengki.png'),
  'Doa Sebelum Mandi': require('../../assets/sebelum_mandi.png'),
  'Doa Ketika Sampai di Tempat Tujuan': require('../../assets/tujuan.png'),
  'Doa Menjelang Sholat Shubuh': require('../../assets/menjelang-subuh.png'),
'Doa Memohon Terlepas dari Kesulitan': require('../../assets/kesulitan.png'),
  default: require('../../assets/anak-berdoa.png'),
};


export default function DoaHarian() {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://open-api.my.id/api/doa')
      .then((res) => res.json())
      .then((data) => {
        setDoaList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal fetch doa:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff9800" />
        <Text style={styles.loadingText}>Memuat Doa Harian...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={doaList}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const image = imageMap[item.judul] || imageMap['default'];

        return (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/doa-harian/${encodeURIComponent(item.judul)}`)}
          >
            <Image source={image} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.judul}</Text>
              <Text style={styles.preview} numberOfLines={1}>{item.arab}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff8dc',
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d35400',
  },
  preview: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
