import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TahiyatAwal() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tahiyat Awal</Text>

      <Text style={styles.arab}>
        التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Text>
      <Text style={styles.latin}>
        Attahiyyaatu lillaahi wassalawaatu watthayyibaatu, assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuhu, assalaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu allaa ilaaha illallaah wa asyhadu anna Muhammadan 'abduhu wa rasuuluh.
      </Text>
      <Text style={styles.arti}>
        Segala kehormatan, keberkahan, shalawat, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat, dan berkah Allah tercurah kepadamu wahai Nabi. Keselamatan atas kami dan atas hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fffde7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#e67e22' },
  arab: { fontSize: 26, textAlign: 'center', marginVertical: 20, color: '#34495e' },
  latin: { fontSize: 18, fontStyle: 'italic', marginBottom: 10, color: '#7f8c8d', textAlign: 'center' },
  arti: { fontSize: 16, color: '#2c3e50', textAlign: 'center' },
});
