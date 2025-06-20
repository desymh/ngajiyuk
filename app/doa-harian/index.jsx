import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

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
      .then(res => res.json())
      .then(data => {
        setDoaList(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal memuat data:', err);
        setLoading(false);
      });
  }, []);

  const getImage = (title) => imageMap[title] || imageMap.default;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text style={styles.loadingText}>Memuat Doa Harian...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={doaList}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={() =>
            router.push({ pathname: '/doa-harian/[id]', params: { id: item.judul } })
          }
        >
          <Image source={getImage(item.judul)} style={styles.backgroundImage} />
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.judul}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const cardWidth = (Dimensions.get('window').width - 48) / 2;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#F9A528',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardWrapper: {
    width: cardWidth,
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  textContainer: {
    zIndex: 2,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
  },
});