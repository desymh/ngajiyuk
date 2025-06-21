import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const cardMargin = 16;
const cardWidth = (screenWidth - cardMargin * 3) / 2;

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text style={styles.loadingText}>Memuat Doa Harian...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doa Harian</Text>
      
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerImageContainer}>
          <Image
            source={require('../../assets/icon-doa.png')}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.grid}>
          {doaList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cardWrapper, { backgroundColor: colorsArray[index % colorsArray.length] }]}
              onPress={() =>
                router.push({ pathname: '/doa-harian/[id]', params: { id: item.judul } })
              }
            >
              <Text style={styles.cardText}>{item.judul}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
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
  headerBar: {
    backgroundColor: '#FFA726',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerImageContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: cardWidth,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 16,
    padding: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },
});
