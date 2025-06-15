import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function BacaanSholat() {
  const bacaan = [
    {
      judul: 'Niat Sholat Dzuhur',
      arab: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى',
      latin: 'Usholli fardho dhuhri arba’a roka’atin mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
      arti: 'Aku niat sholat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta’ala.'
    },
    {
      judul: 'Doa Iftitah',
      arab: `اللّٰهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلّٰهِ كَثِيْرًا وَسُبْحَانَ اللّٰهِ بُكْرَةً وَأَصِيْلًا إِنِّيْ وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمٰوَاتِ وَالْأَرْضَ حَنِيْفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِيْنَ إِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلّٰهِ رَبِّ الْعَالَمِيْنَ لَا شَرِيْكَ لَهُ وَبِذٰلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِيْنَ`,
      latin: `Allahu akbar kabiraw walhamdu lillahi katsira, wa subhanallahi bukrotaw washila inni wajjahtu wajhiya lilladzi fatharas samawati wal arha hanifam muslimaw wa ma ana minal musyrikin inna sholati wa nusuki wa mahyaya wa mamati lillahi rabbil alamin la syarika lahu wa bidzalika umirtu wa ana minal muslimin
`,
      arti: 'Allah Maha Besar lagi sempurna kebesaran-Nya, segala puji bagi Allah dengan sebanyak-banyak pujian. Dan Maha Suci Allah sepanjang pagi dan sore. Kuhadapkan wajahku kepada Dzat yang mencipta langit dan bumi dalam keadaan lurus dan pasrah. Dan aku bukanlah dari golongan orang-orang yang menyekutukan Allah. Sesungguhnya sholatku, ibadahku, hidup dan matiku semata hanya untuk Allah Tuhan Semua Alam, tiada sekutu bagi-Nya. dan begitulah aku diperintahkan dan aku dari golongan orang muslim'
    },
    {
      judul: 'Al-Fatihah',
      arab: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ 
الرَّحْمَٰنِ الرَّحِيمِ 
مَالِكِ يَوْمِ الدِّينِ 
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ 
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ 
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ 
غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
      latin: `Bismillaahir rahmaanir rahiim.
Alhamdu lillaahi rabbil ‘aalamiin.
Ar-rahmaanir rahiim.
Maaliki yaumiddiin.
Iyyaaka na’budu wa iyyaaka nasta’iin.
Ihdinash shiraathal mustaqiim.
Shiraathalladziina an’amta ‘alaihim.
Ghairil maghduubi ‘alaihim waladhaalliin.`,
      arti: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang...'
    },
    {
      judul: 'Tahiyat Akhir',
      arab: `التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ`,
      latin: `Attahiyyaatu lillaahi wash shalawaatu watthayyibaatu,
assalaamu ‘alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh,
assalaamu ‘alainaa wa ‘alaa ‘ibaadillaahish shaalihiin,
asyhadu allaa ilaaha illallaahu wa asyhadu anna Muhammadan ‘abduhu wa rasuuluh.`,
      arti: 'Segala penghormatan, shalawat, dan kebaikan hanya milik Allah...'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {bacaan.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{item.judul}</Text>
          <Text style={styles.arab}>{item.arab}</Text>
          <Text style={styles.latin}>{item.latin}</Text>
          <Text style={styles.arti}>{item.arti}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffde7',
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
    color: '#e67e22',
  },
  arab: {
    fontSize: 22,
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
