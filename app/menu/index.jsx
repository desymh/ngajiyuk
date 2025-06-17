import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, font } from '../../constants/theme';

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ngaji Yuk!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/doa-harian')}>
        <Image source={require('../../assets/anak-berdoa.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Doa Harian</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/bacaan-sholat')}>
        <Image source={require('../../assets/anak-sholat.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Bacaan Sholat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/belajar-iqro')}>
        <Image source={require('../../assets/anak-ngaji.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Belajar Iqro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: font.family,
    color: colors.primary,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    width: '80%',
    elevation: 3,
  },
  buttonText: {
    fontFamily: font.family,
    fontSize: 18,
    marginLeft: 10,
    color: colors.text,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
