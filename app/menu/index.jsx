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
    image: require('../../assets/anak-berdoa.png'),
    route: '/doa-harian',
    color: '#FDEBD0',
  },
  {
    title: 'Bacaan Sholat',
    image: require('../../assets/anak-sholat.png'),
    route: '/bacaan-sholat',
     color: '#D6EAF8',
  },
  {
    title: 'asmaul husna',
    image: require('../../assets/anak-ngaji.png'),
    route: '/asmaul-husna',
    color: '#D5F5E3',
  },
  {
    title: 'Naiat niat dalam Wudhu',
    image: require('../../assets/niat.png'),
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
      style={[styles.menuCard, { backgroundColor: item.color }]} 
      onPress={() => router.push(item.route)}
    >
      <Image source={item.image} style={styles.menuImage} />
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
    fontFamily: font.family,
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
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 16,
    elevation: 3,
  },
  menuImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  menuLabel: {
    fontFamily: font.family,
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
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
