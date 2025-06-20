import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const steps = [
  { title: 'Niat', key: 'niat', image: require('../../assets/1.png') },
  { title: 'Membasuh Muka', key: 'muka', image: require('../../assets/2.png') },
  { title: 'Membasuh Tangan', key: 'tangan', image: require('../../assets/3.png') },
  { title: 'Membasuh Kepala', key: 'kepala', image: require('../../assets/4.png') },
  { title: 'Membasuh Telinga', key: 'telinga', image: require('../../assets/5.png') },
  { title: 'Membasuh Kaki', key: 'kaki', image: require('../../assets/6.png') },
  { title: 'Doa Setelah Wudhu', key: 'doa', image: require('../../assets/7.png') },
];

export default function WudhuList() {
  const router = useRouter();

  return (
    <FlatList
      data={steps}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({ pathname: '/wudhu/detail', params: { step: item.key } })
          }
        >
          <Image source={item.image} style={styles.cardBackground} />
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const cardWidth = (Dimensions.get('window').width - 48) / 2;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#F9A528',
    flexGrow: 1, 
    minHeight: '100%',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: cardWidth,
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '200%',
    height: '140%',
    alignSelf: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  textContainer: {
    zIndex: 2,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
  },
});