import { ScrollView, StyleSheet, Text } from 'react-native';

export default function AlFatihah() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Al-Fatihah</Text>

      <Text style={styles.arab}>
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ ۙ
        الرَّحْمٰنِ الرَّحِيْمِ ۙ
        مٰلِكِ يَوْمِ الدِّيْنِ ۗ
        إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ ۗ
        اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ ۙ
        صِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ ۙ
        غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلاَ الضَّآلِّيْنَ
      </Text>
      <Text style={styles.arti}>
        Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
        Segala puji bagi Allah, Tuhan seluruh alam.
        Maha Pengasih, Maha Penyayang.
        Pemilik hari pembalasan.
        Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami mohon pertolongan.
        Tunjukilah kami jalan yang lurus,
        (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka,
        bukan jalan mereka yang dimurkai, dan bukan jalan mereka yang sesat.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fffde7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#e67e22' },
  arab: { fontSize: 22, marginVertical: 10, color: '#34495e' },
  arti: { fontSize: 16, color: '#2c3e50' },
});
