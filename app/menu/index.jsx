import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
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

export default function Menu() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Islamic Kids</Text>

      <TouchableOpacity style={styles.heroCard}>
        <View style={styles.heroContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>Mulai Belajar</Text>
            <Text style={styles.heroSubtitle}>Mari belajar sambil bermain</Text>
          </View>
          <Image
            source={require('../../assets/anak-ngaji.png')}
            style={styles.heroImage}
          />
        </View>
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
        <Text style={styles.recommendTitle}>Rekomendasi</Text>
        <View style={styles.recommendCard}>
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
    backgroundColor: '#FDCB6E',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 8,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    minHeight: 220,
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  heroImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 10,
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
    marginTop: 6,
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
    backgroundColor: '#FFE082',
    height: 100,
    borderRadius: 20,
    elevation: 3,
  },
});