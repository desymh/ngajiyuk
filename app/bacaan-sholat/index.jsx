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
const cardWidth = (screenWidth - 48) / 3;

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
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={26} color="#fff" />
            </TouchableOpacity>
            <Image
              source={require('../../assets/icon-s.png')} 
              style={styles.headerImage}
            />
          </View>
        }
        data={steps}
        numColumns={3}
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
  headerWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
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
    zIndex: 10,
  },
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
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
