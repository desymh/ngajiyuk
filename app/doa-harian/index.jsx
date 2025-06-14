import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

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
        <ActivityIndicator size="large" color="#f1c40f" />
        <Text>Loading Doa Harian...</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: '#fff8e1',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#2c3e50',
  },
  arab: {
    fontSize: 24,
    textAlign: 'right',
    marginVertical: 10,
    color: '#34495e',
  },
  latin: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#7f8c8d',
  },
  arti: {
    fontSize: 16,
    color: '#2c3e50',
  },
});
