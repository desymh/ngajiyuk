import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { colors, font } from '../../constants/theme';

const menuItems = [
  {
    title: 'Doa Harian',
    image: require('../../assets/icon-d.png'),
    route: '/doa-harian',
    color: '#FDEBD0',
  },
  {
    title: 'Bacaan Sholat',
    image: require('../../assets/icon-s.png'),
    route: '/bacaan-sholat',
    color: '#D6EAF8',
  },
  {
    title: 'Asmaul Husna',
    image: require('../../assets/icon-a.png'),
    route: '/asmaul-husna',
    color: '#D5F5E3',
  },
  {
    title: 'Niat Wudhu',
    image: require('../../assets/icon-w.png'),
    route: '/wudhu',
    color: '#FADBD8',
  },
];

const kataBijak = [
  "📚 Ilmu tanpa amal adalah sia-sia.",
  "🕌 Sholat adalah tiang agama, jangan tinggalkan.",
  "🤲 Rezeki tidak akan tertukar.",
  "💖 Bersyukurlah, maka Allah akan menambah nikmatmu.",
  "🕊️ Allah bersama orang-orang yang sabar.",
  "🧎‍♂️ Doa adalah senjata terbaik seorang mukmin.",
  "⏳ Hidup hanya sebentar, perbanyak bekal akhirat.",
  "✨ Kebaikan sekecil apapun akan dibalas oleh Allah.",
  "🤍 Jangan iri dengan rezeki orang lain, Allah Maha Adil.",
  "🌈 Setiap ujian pasti ada hikmahnya.",
  "Allah selalu bersamamu 🤍✨",
  "Senyum itu sedekah 😊",
  "Belajar hari ini, pahala untuk selamanya 📖🌟",
  "Jadilah anak yang sholeh/sholehah 🤲❤️",
  "Berdoalah dengan hati yang tulus 🕊️",
  "Jangan lupa baca Bismillah hari ini 📿",
];

export default function Menu() {
  const router = useRouter();
  const [kataPilihan, setKataPilihan] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * kataBijak.length);
    setKataPilihan(kataBijak[randomIndex]);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Islamic Kids</Text>

      <TouchableOpacity style={styles.heroCard}>
        <ImageBackground
          source={require('../../assets/ayo-belajar.png')}
          style={styles.heroImageFull}
          imageStyle={{ borderRadius: 20 }}
        />
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.menuScroll}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.menuCard]}
            onPress={() => router.push(item.route)}
          >
            <View style={[styles.cardImageWrapper, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.cardImage} />
            </View>
            <Text style={styles.menuLabel}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.recommendSection}>
        <Text style={styles.recommendTitle}>Motivasi Hari ini✨</Text>
        <View style={styles.recommendCard}>
          <Text style={styles.kataText}>{kataPilihan}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontFamily: 'Fredoka_400Regular',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  heroCard: {
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  heroImageFull: {
    flex: 1,
    width: '100%',
  },
  menuScroll: {
    paddingVertical: 10,
  },
  menuCard: {
    backgroundColor: '#FFF',
    width: 120,
    height: 150,
    borderRadius: 16,
    marginRight: 16,
    elevation: 3,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImageWrapper: {
    width: '100%',
    height: 110,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    transform: [{ scale: 1.8 }],
  },
  menuLabel: {
    fontFamily: font.family,
    fontSize: 13,
    color: colors.text,
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 10,
    fontFamily: 'Fredoka_600SemiBold',
  },
  recommendSection: {
    marginTop: 30,
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  recommendCard: {
    backgroundColor: '#F9A528',
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  kataText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#2c3e50',
    textAlign: 'center',
  },
});
