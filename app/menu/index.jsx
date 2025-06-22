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
  { title: 'Doa Harian', image: require('../../assets/icon-d.png'), route: '/doa-harian', color: '#FDEBD0' },
  { title: 'Juz Amma', image: require('../../assets/alquran.png'), route: '/juz-amma', color: '#D6EAF8' },
  { title: 'Asmaul Husna', image: require('../../assets/icon-a.png'), route: '/asmaul-husna', color: '#D5F5E3' },
  { title: 'Niat Wudhu', image: require('../../assets/icon-w.png'), route: '/wudhu', color: '#FADBD8' },
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

const faktaIslami = [
  "Nabi Muhammad SAW sangat menyukai aroma wangi dan bersiwak 🌿",
  "Malaikat akan mendoakan orang yang tidur dalam keadaan suci 🧼",
  "Al-Qur’an adalah cahaya bagi hati dan petunjuk hidup kita 📖✨",
  "Mengucapkan salam bisa mendatangkan pahala besar 🤝",
  "Membaca Bismillah sebelum makan membuat setan tidak ikut makan 🍽️🚫",
];

const tebakanIslami = [
  { question: "Apa nama bulan suci umat Islam? 🌙", answer: "Ramadhan" },
  { question: "Berapa rakaat sholat Subuh? 🌅", answer: "2 rakaat" },
  { question: "Siapakah nabi terakhir? 🤲", answer: "Nabi Muhammad SAW" },
  { question: "Kitab suci umat Islam adalah? 📖", answer: "Al-Qur’an" },
  { question: "Hari raya umat Islam disebut? 🎉", answer: "Idul Fitri" },
  { question: "Apa arah kiblat umat Islam saat sholat? 🧭", answer: "Ka'bah di Mekah" },
  { question: "Apa yang harus dibaca sebelum makan? 🍽️", answer: "Bismillah" },
  { question: "Nama kitab yang diturunkan kepada Nabi Musa? 📜", answer: "Taurat" },
  { question: "Apa arti 'Assalamu’alaikum'? 🤝", answer: "Semoga keselamatan tercurah untukmu" },
  { question: "Berapa kali dalam sehari umat Islam sholat? 🕋", answer: "5 kali" },
  { question: "Apa yang dilakukan sebelum sholat? 💧", answer: "Wudhu" },
  { question: "Apa nama malam yang lebih baik dari 1000 bulan? 🌌", answer: "Lailatul Qadar" },
  { question: "Siapa sahabat yang menemani Nabi hijrah ke Madinah? 🐫", answer: "Abu Bakar" },
  { question: "Apa bacaan untuk membuka sholat? 🙏", answer: "Takbir (Allahu Akbar)" },
  { question: "Apa nama tempat suci di Mekah? 🕋", answer: "Ka'bah" }
];

export default function Menu() {
  const router = useRouter();
  const [kataPilihan, setKataPilihan] = useState('');
  const [faktaPilihan, setFaktaPilihan] = useState('');
  const [tebakanPilihan, setTebakanPilihan] = useState(null);
  const [showJawaban, setShowJawaban] = useState(false);

  useEffect(() => {
    setKataPilihan(kataBijak[Math.floor(Math.random() * kataBijak.length)]);
    setFaktaPilihan(faktaIslami[Math.floor(Math.random() * faktaIslami.length)]);
    setTebakanPilihan(tebakanIslami[Math.floor(Math.random() * tebakanIslami.length)]);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Islamic Kids</Text>
          <Text style={styles.headerSub}>kids education.</Text>
        </View>
      
      </View>
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
        <Text style={styles.recommendTitle}>Motivasi Hari ini ✨</Text>
        <View style={styles.recommendCard}>
          <Text style={styles.kataText}>{kataPilihan}</Text>
        </View>
      </View>
      <View style={styles.faktaCard}>
        <Text style={styles.faktaTitle}>Tahukah Kamu? 🧐</Text>
        <Text style={styles.faktaText}>{faktaPilihan}</Text>
      </View>
      <View style={styles.quizCard}>
        <TouchableOpacity onPress={() => setShowJawaban(!showJawaban)}>
          <Text style={styles.quizText}>
            {tebakanPilihan?.question}
            {showJawaban ? `\n➜ ${tebakanPilihan.answer}` : '\n(klik aku👇)'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'Fredoka_700Bold',
    color: '#F9A528',
  },
  headerSub: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    fontFamily: 'Fredoka_400Regular',
  },
  headerIconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFA500',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#FFF3E0',
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  kataText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontFamily: 'Fredoka_600SemiBold',
  },
  faktaCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginTop: 25,
  },
  faktaTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Fredoka_500Medium',
  },
  faktaText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Fredoka_500Medium',
    lineHeight: 22,
  },
  quizCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginTop: 25,
  },
  quizText: {
    fontSize: 15,
    color: '#4E342E',
    textAlign: 'center',
    fontFamily: 'Fredoka_500Medium',
    lineHeight: 22,
  },
});
