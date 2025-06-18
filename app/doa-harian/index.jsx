import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { colors, font } from '../../constants/theme';

const cardColors = ['#FFD180', '#CE93D8', '#80CBC4', '#A5D6A7', '#FFAB91'];

export default function DoaHarian() {
  const [doa, setDoa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open-api.my.id/api/doa')
      .then(response => response.json())
      .then(data => {
        setDoa(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading Doa Harian...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={doa}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={[styles.card, { backgroundColor: cardColors[index % cardColors.length] }]}>
          <View style={styles.row}>
            <Image source={require('../../assets/anak-berdoa.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.judul}</Text>
              <Text style={styles.arab}>{item.arab}</Text>
              <Text style={styles.latin}>{item.latin}</Text>
              <Text style={styles.arti}>{item.arti}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontFamily: font.family,
    fontSize: 16,
    color: colors.text,
  },
  list: {
    backgroundColor: colors.background,
  },
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 20,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: font.family,
    fontSize: 18,
    color: colors.primary,
    marginBottom: 5,
  },
  arab: {
    fontSize: 20,
    color: colors.arabic,
    textAlign: 'right',
    marginBottom: 5,
  },
  latin: {
    fontStyle: 'italic',
    color: colors.latin,
    marginBottom: 5,
  },
  arti: {
    fontSize: 14,
    color: colors.text,
  },
});
