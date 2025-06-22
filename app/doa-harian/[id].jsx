import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

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
  'Doa Setelah Membaca Al-Qur\'an': require('../../assets/sesudah_ngaji.png'),
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
   <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doa Harian</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.judul}>{doa.judul}</Text>
        <Text style={styles.arab}>{doa.arab}</Text>
        <Text style={styles.latin}>{doa.latin}</Text>
        <Text style={styles.arti}>{doa.arti}</Text>
        <Image source={imageSource} style={styles.image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  headerBar: {
    backgroundColor: '#FFA726',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  judul: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 40,
    marginBottom: 20,
  },
  arab: {
    fontSize: 26,
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 16,
  },
  latin: {
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 12,
  },
  arti: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 24,
  },
  image: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
