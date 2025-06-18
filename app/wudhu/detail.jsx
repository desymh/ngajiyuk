import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const detailData = {
  niat: {
    title: 'Niat',
    image: require('../../assets/niat.png'),
    description: 'Niat berwudhu di dalam hati sebelum memulai.',
  },
  muka: {
    title: 'Membasuh Muka',
    image: require('../../assets/game.png'),
    description: 'Membasuh seluruh muka dari ujung rambut hingga dagu.',
  },
  tangan: {
    title: 'Membasuh Tangan',
    image: require('../../assets/niat.png'),
    description: 'Membasuh kedua tangan sampai siku.',
  },
  kepala: {
    title: 'Membasuh Kepala',
    image: require('../../assets/niat.png'),
    description: 'Mengusap sebagian kepala dengan air.',
  },
  telinga: {
    title: 'Membasuh Telinga',
    image: require('../../assets/niat.png'),
    description: 'Membasuh telinga luar dan dalam (sunnah).',
  },
  kaki: {
    title: 'Membasuh Kaki',
    image: require('../../assets/niat.png'),
    description: 'Membasuh kaki hingga mata kaki.',
  },
};

export default function StepDetail() {
  const { step } = useLocalSearchParams();
  const router = useRouter();

  const data = detailData[step];

  if (!data) return <Text>Data tidak ditemukan</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>← Kembali</Text>
      </TouchableOpacity>

      <Image source={data.image} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  back: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#555',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
});
