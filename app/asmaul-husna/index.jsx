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
    <FlatList
      ListHeaderComponent={() => (
        <View style={styles.headerSection}>
          <View style={styles.headerTop}>
            <Text style={styles.headerEmoji}>🌟</Text>
            <Text style={styles.headerTitle}>Asmaul Husna</Text>
            <Text style={styles.headerSubtitle}>
              Yuk mengenal <Text style={{ fontWeight: 'bold' }}>99 nama indah</Text> Allah SWT!
            </Text>
          </View>
          <Image
            source={require('../../assets/anak-ngaji.png')} // pastikan file ini ada
            style={styles.headerImage}
          />
        </View>
      )}
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
    color: '#888',
  },
  headerSection: {
    backgroundColor: '#F9A528',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerEmoji: {
    fontSize: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 6,
    textAlign: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  gridContainer: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    margin: 6,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    elevation: 3,
  },
  arab: {
    fontSize: 20,
    color: '#6A1B9A',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  latin: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  arti: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
});
