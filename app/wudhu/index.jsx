import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

const steps = [
  { title: 'Niat', key: 'niat', image: require('../../assets/1.png'), color: '#FDEBD0' },
  { title: 'Membasuh Muka', key: 'muka', image: require('../../assets/2.png'), color: '#D6EAF8' },
  { title: 'Membasuh Tangan', key: 'tangan', image: require('../../assets/3.png'), color: '#D5F5E3' },
  { title: 'Membasuh Kepala', key: 'kepala', image: require('../../assets/4.png'), color: '#FADBD8' },
  { title: 'Membasuh Telinga', key: 'telinga', image: require('../../assets/5.png'), color: '#FCF3CF' },
  { title: 'Membasuh Kaki', key: 'kaki', image: require('../../assets/6.png'), color: '#E8DAEF' },
  { title: 'Doa Setelah Wudhu', key: 'doa', image: require('../../assets/7.png'), color: '#D1F2EB' },
];

export default function WudhuList() {
  const router = useRouter();

  return (
    <FlatList
      data={steps}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.card, { backgroundColor: item.color }]}
          onPress={() =>
            router.push({ pathname: '/wudhu/detail', params: { step: item.key } })
          }
        >
          <Image source={item.image} style={styles.cardBackground} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#FFFDE7',
  },
  card: {
    width: '92%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '200%',
  height: '200%',
  resizeMode: 'cover',
  opacity: 0.15,
  transform: [{ translateX: -50 }, { translateY: -30 }],
  borderRadius: 30,
},

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
});
