import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { colors, font } from '../../constants/theme';

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
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.judul}</Text>
          <Text style={styles.arab}>{item.arab}</Text>
          <Text style={styles.latin}>{item.latin}</Text>
          <Text style={styles.arti}>{item.arti}</Text>
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
    backgroundColor: colors.card,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontFamily: font.family,
    fontSize: 18,
    marginBottom: 10,
    color: colors.primary,
  },
  arab: {
    fontSize: 24,
    textAlign: 'right',
    marginVertical: 10,
    color: colors.arabic,
    fontFamily: font.family,
  },
  latin: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: colors.latin,
    fontFamily: font.family,
  },
  arti: {
    fontSize: 16,
    color: colors.text,
    fontFamily: font.family,
  },
});
