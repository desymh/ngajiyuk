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

const steps = [
  { title: 'Niat', key: 'niat' },
  { title: 'Membasuh Muka', key: 'muka' },
  { title: 'Membasuh Tangan', key: 'tangan' },
  { title: 'Membasuh Kepala', key: 'kepala' },
  { title: 'Membasuh Telinga', key: 'telinga' },
  { title: 'Membasuh Kaki', key: 'kaki' },
  { title: 'Doa Setelah Wudhu', key: 'doa' },
];

export default function WudhuList() {
  const router = useRouter();

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerWrapper}>
          <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Image
            source={require('../../assets/wudhu.png')}
            style={styles.headerImage}
          />
        </View>
      }
      data={steps}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.row}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.card, { backgroundColor: colorsArray[index % colorsArray.length] }]}
          onPress={() =>
            router.push({ pathname: '/wudhu/detail', params: { step: item.key } })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const cardWidth = (Dimensions.get('window').width - 48) / 2;

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    top: 18,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 6,
    borderRadius: 40,
  },
  headerImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: cardWidth,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});