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
import { Ionicons } from '@expo/vector-icons';

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48) / 3;

export default function AsmaulHusna() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://asmaul-husna-api.vercel.app/api/all')
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson.data || []);
        setLoading(false);
      })
      .catch((err) => {
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
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.gridContainer}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      ListHeaderComponent={
        <View style={styles.headerWrapper}>
          <Image
            source={require('../../assets/icon-asma.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      }
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.card, { backgroundColor: colorsArray[index % colorsArray.length] }]}
        >
          <Text style={styles.arab}>{item.arab}</Text>
          <Text style={styles.latin}>{item.latin}</Text>
          <Text style={styles.arti}>{item.arti}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 210,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#00000055',
    borderRadius: 20,
    padding: 4,
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
  gridContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  card: {
    width: cardWidth,
    marginBottom: 12,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
    elevation: 3,
  },
  arab: {
    fontSize: 20,
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: 4,
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
