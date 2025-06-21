import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const colorsArray = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#E8DAEF', '#FCF3CF'];
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48 - 8) / 2;

const steps = [
  { title: 'Niat', link: '/bacaan-sholat/niat' },
  { title: 'Takbiratul Ihram', link: '/bacaan-sholat/takbiratul-ihram' },
  { title: 'Doa Iftitah', link: '/bacaan-sholat/iftitah' },
  { title: 'Al-Fatihah', link: '/bacaan-sholat/fatihah' },
  { title: 'Surat Pendek (Juz 30)', link: '/bacaan-sholat/surat' },
  { title: 'Rukuk', link: '/bacaan-sholat/rukuk' },
  { title: 'I\'tidal', link: '/bacaan-sholat/itidal' },
  { title: 'Sujud', link: '/bacaan-sholat/sujud' },
  { title: 'Duduk Antara Dua Sujud', link: '/bacaan-sholat/duduk2sujud' },
  { title: 'Tahiyat Awal', link: '/bacaan-sholat/tahiyatawal' },
  { title: 'Tahiyat Akhir', link: '/bacaan-sholat/tahiyatakhir' },
  { title: 'Salam', link: '/bacaan-sholat/salam' },
];

export default function BacaanSholat() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bacaan Sholat</Text>
        <View style={{ width: 36 }} />
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/sholat.png')}
                style={styles.headerImage}
              />
            </View>
          </>
        }
        data={steps}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colorsArray[index % colorsArray.length] }]}
            onPress={() => router.push(item.link)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F39C12',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  backButton: {
    backgroundColor: '#00000055',
    padding: 6,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
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
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },
});