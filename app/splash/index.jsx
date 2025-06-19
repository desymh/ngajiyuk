import React, { useEffect, useRef } from 'react';
import { Animated, View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi progress bar selama 2 detik
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      router.replace('/menu'); // Setelah selesai, pindah ke menu
    });
  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash-anak.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.loadingBarContainer}>
        <Animated.View style={[styles.loadingBar, { width: widthInterpolated }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingBarContainer: {
    position: 'absolute',
    bottom: 50,
    left: 40,
    right: 40,
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#f39c12',
  },
});