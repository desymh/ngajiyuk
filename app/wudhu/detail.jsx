import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Niat Wudhu</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerBar: {
    backgroundColor: '#FFA726',
    paddingTop: 50, 
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  backButton: {
    marginRight: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});
