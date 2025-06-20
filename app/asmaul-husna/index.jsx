import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];

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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/icon-asma.png')}
          style={styles.fullHeaderImage}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back-outline" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
        keyExtractor={(item, index) => index.toString()}
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
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
  },
  fullHeaderImage: {
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
    padding: 2,
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
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    margin: 6,
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
