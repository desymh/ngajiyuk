import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const cardMargin = 16;
const cardWidth = (screenWidth - cardMargin * 3) / 3;
const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];

export default function AsmaulHusna() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://asmaul-husna-api.vercel.app/api/all')
      .then(res => res.json())
      .then(resJson => {
        setData(resJson.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal memuat Asmaul Husna:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text style={styles.loadingText}>Memuat Asmaul Husna...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Asmaul Husna</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerImageContainer}>
          <Image
            source={require('../../assets/icon-asma.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.grid}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cardWrapper, { backgroundColor: colorsArray[index % colorsArray.length] }]}
            >
              <Text style={styles.arab}>{item.arab}</Text>
              <Text style={styles.latin}>{item.latin}</Text>
              <Text style={styles.arti}>{item.arti}</Text>
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
  arab: {
    fontSize: 20,
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  latin: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  arti: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
});