import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Iftitah() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Doa Iftitah</Text>
      
      <Text style={styles.arab}>
        وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمٰوٰتِ وَالْأَرْضَ حَنِيْفًا وَمَا أَنَا مِنَ الْمُشْرِكِيْنَ 
        إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، 
        لَا شَرِيكَ لَهُ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ
      </Text>
      <Text style={styles.latin}>
        Wajjahtu wajhiya lilladzi fataras samaawaati wal ardho haniifan wamaa ana minal musyrikiin.
        Inna sholatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil ‘aalamiin.
        Laa syariikalahu wa bidzaalika umirtu wa ana minal muslimiin.
      </Text>
      <Text style={styles.arti}>
        Aku hadapkan wajahku kepada Tuhan yang menciptakan langit dan bumi dengan tunduk, 
        dan aku bukanlah termasuk orang-orang musyrik. 
        Sesungguhnya sholatku, ibadahku, hidupku, dan matiku hanyalah untuk Allah, Tuhan seluruh alam. 
        Tiada sekutu bagi-Nya. Demikianlah aku diperintahkan dan aku termasuk orang-orang muslim.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fffde7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#e67e22' },
  arab: { fontSize: 24, marginVertical: 10, color: '#34495e' },
  latin: { fontSize: 16, fontStyle: 'italic', marginBottom: 10, color: '#7f8c8d' },
  arti: { fontSize: 16, color: '#2c3e50' },
});
