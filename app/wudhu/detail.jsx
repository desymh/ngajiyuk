import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const stepImages = {
  niat: require('../../assets/1.png'),
  muka: require('../../assets/2.png'),
  tangan: require('../../assets/3.png'),
  kepala: require('../../assets/4.png'),
  telinga: require('../../assets/5.png'),
  kaki: require('../../assets/6.png'),
  doa: require('../../assets/7.png'),
};

export default function StepDetail() {
  const { step } = useLocalSearchParams();
  const router = useRouter();

  const imageSource = stepImages[step];
  if (!imageSource) return null;

  return (
    <View style={styles.container}>
      <View style={styles.backgroundCard}>
        <Image source={imageSource} style={styles.image} />
      </View>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE38A', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundCard: {
    width: width * 0.92,
    height: height * 0.85,
    borderRadius: 35,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 8,
    backgroundColor: '#ffffffcc',
    borderRadius: 50,
    zIndex: 10,
  },
});
