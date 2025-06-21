import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48 - 8) / 2;

export default function JuzAmma() {
  const [suratList, setSuratList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://equran.id/api/surat')
      .then((res) => res.json())
      .then((data) => {
        const juz30 = data.filter((surat) => surat.nomor >= 78);
        setSuratList(juz30);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat daftar surat:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text style={styles.loadingText}>Memuat Juz Amma...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Juz Amma</Text>
      </View>

      <FlatList
        ListHeaderComponent={
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/quran.png')} style={styles.headerImage} />
          </View>
        }
        data={suratList}
        numColumns={2}
        keyExtractor={(item) => item.nomor.toString()}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colorsArray[index % colorsArray.length] }]}
            onPress={() => router.push(`/juz-amma/${item.nomor}`)}
          >
            <Text style={styles.cardTitle}>{item.nama_latin}</Text>
            <Text style={styles.cardArti}>{item.arti}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#FFA726',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
  imageWrapper: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
    marginBottom: 4,
  },
  cardArti: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
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
});
