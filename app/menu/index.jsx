import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, font } from '../../constants/theme';

const menuItems = [
  {
    title: 'Doa Harian',
    image: require('../../assets/anak-berdoa.png'),
    route: '/doa-harian',
  },
  {
    title: 'Bacaan Sholat',
    image: require('../../assets/anak-sholat.png'),
    route: '/bacaan-sholat',
  },
  {
    title: 'Belajar Iqro',
    image: require('../../assets/anak-ngaji.png'),
    route: '/belajar-iqro',
  },
  {
  title: 'Tata Cara Wudhu',
  image: require('../../assets/niat.png'), 
  route:'/wudhu',
},

];

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ngaji Yuk!</Text>
      <View style={styles.grid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(item.route)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 80) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontFamily: font.family,
    color: colors.primary,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    backgroundColor: colors.secondary,
    width: cardSize,
    height: cardSize + 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  label: {
    fontFamily: font.family,
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
});
