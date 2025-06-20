import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const gambarDoa = {
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

export default function DetailDoa() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [doa, setDoa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open-api.my.id/api/doa')
      .then(res => res.json())
      .then(data => {
        const item = data.find((d) => d.judul === id);
        setDoa(item);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e67e22" />
        <Text>Loading doa...</Text>
      </View>
    );
  }

  if (!doa) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Doa tidak ditemukan.</Text>
      </View>
    );
  }

  const imageSource = gambarDoa[doa.judul] || gambarDoa.default;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.imageWrapper}>
        <ImageBackground source={imageSource} style={styles.headerImage} imageStyle={styles.headerImageStyle}>
          <View style={styles.overlay} />
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{doa.judul}</Text>
        </ImageBackground>
      </View>

      <View style={styles.card}>
        <Text style={styles.arab}>{doa.arab}</Text>
        <Text style={styles.latin}>{doa.latin}</Text>
        <Text style={styles.arti}>{doa.arti}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fffde7',
  },
  imageWrapper: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: 280,
    justifyContent: 'flex-end',
    padding: 20,
  },
  headerImageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#ffffffcc',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  backArrow: {
    fontSize: 22,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 6,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  arab: {
    fontSize: 26,
    textAlign: 'right',
    color: '#2c3e50',
    marginBottom: 12,
  },
  latin: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 10,
  },
  arti: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
