import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const steps = [
  { title: 'Niat', key: 'niat', image: require('../../assets/niat.png') },
  { title: 'Membasuh Muka', key: 'muka', image: require('../../assets/game.png') },
  { title: 'Membasuh Tangan', key: 'tangan', image: require('../../assets/niat.png') },
  { title: 'Membasuh Kepala', key: 'kepala', image: require('../../assets/niat.png') },
  { title: 'Membasuh Telinga', key: 'telinga', image: require('../../assets/niat.png') },
  { title: 'Membasuh Kaki', key: 'kaki', image: require('../../assets/niat.png') },
];

export default function WudhuList() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tata Cara Wudhu</Text>
      {steps.map((step, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push({ pathname: '/wudhu/detail', params: { step: step.key } })}
        >
          <Image source={step.image} style={styles.image} />
          <View>
            <Text style={styles.title}>{step.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#E2F0CB',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
