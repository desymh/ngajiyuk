import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];

export default function SuratDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [surat, setSurat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${id}`)
      .then(res => res.json())
      .then(json => {
        setSurat(json.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#f39c12" />
        <Text style={{ marginTop: 8 }}>Memuat ayat...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Juz Amma</Text>
      </View>

      <View style={styles.suratInfo}>
        <Text style={styles.namaSurat}>{surat.namaLatin}</Text>
        <Text style={styles.artinya}>({surat.arti})</Text>
      </View>

      {surat?.ayat?.length > 0 ? (
        surat.ayat.map((ayat, index) => (
          <View
            key={ayat.nomorAyat}
            style={[styles.ayatCard, { backgroundColor: colorsArray[index % colorsArray.length] }]}
          >
            <Text style={styles.arab}>{ayat.teksArab}</Text>
            <Text style={styles.indo}>{ayat.teksIndonesia}</Text>
          </View>
        ))
      ) : (
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
          Tidak ada ayat ditemukan.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAF0',
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBar: {
    backgroundColor: '#F39C12',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 6,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  suratInfo: {
    marginTop: 20,
    marginBottom: 10,
  },
  namaSurat: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  artinya: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  ayatCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  arab: {
    fontSize: 24,
    textAlign: 'right',
    color: '#2c3e50',
    marginBottom: 8,
  },
  indo: {
    fontSize: 14,
    color: '#34495e',
  },
});
