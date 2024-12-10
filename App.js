import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity,Alert, View } from 'react-native';

export default function App() {
  const createTwoButtonAlert = () =>
    Alert.alert('Kumaş', 'Ürün sepete eklendi', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Kumaş Merkezi</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Denim.png")}/>
              <Text style={styles.text}>Yaygın olarak "jean" {'\n'}adı verilen, indigo boyalı, {'\n'}diagonal dokuma kumaştır.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Ribana.png")}/>
              <Text style={styles.text}>Düz ve ters ilmekle örülen{'\n'}esnek yapılı kumaştır.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Örme Pike.png")}/>
              <Text style={styles.text}>Genellikle %100 pamuktan{'\n'}yapılan ilmek ve askı{'\n'}hareketiyle oluşan{'\n'}örme kumaştır.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Poplin.png")}/>
              <Text style={styles.text}>Bezayağı, arkası önü aynı{'\n'}pamuklu dokuma kumaştır;{'\n'}kırışsa da kolay ütülenir.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Süprem.png")}/>
              <Text style={styles.text}>Penye, önü ve arkası farklı,{'\n'}rahat giyim sağlayan{'\n'} yuvarlak örme kumaştır.</Text>
              <TouchableOpacity   onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Gabardin.png")}/>
              <Text style={styles.text}>Diagonal dokulu,{'\n'}genelde pamuklu,{'\n'}sıkı dokuma kumaştır.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/İnterlok.png")}/>
              <Text style={styles.text}>Ön ve arka görüntüsü aynı,{'\n'}sıkı örme kumaştır;{'\n'}genellikle çelik örgü denir.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/Dokuma Pike.png")}/>
              <Text style={styles.text}>Jakarlı kumaş, %100{'\n'}pamuktan yapılır{'\n'}ve zor kırışır.</Text>
              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
              style={styles.image}
              source={require("./assets/2-3 iplik.png")}/>
              <Text style={styles.text}>Genellikle 2-3 iplik örme{'\n'}kumaş, sweatshirt kumaşı{'\n'}olarak bilinir.</Text>
              <TouchableOpacity   onPress={createTwoButtonAlert} style={styles.button}>
                 <Text style={styles.buttonText}>Sepete{'\n'}  Ekle</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    
  },
  header: {
    padding:40,  
    backgroundColor: '#5660c3',
    alignItems: 'center',  // Başlığı sağa hizalar
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    paddingTop: StatusBar.currentHeight || 0,  // Durum çubuğunun yüksekliğini dikkate alır
    paddingLeft: 20,  // Sol boşluk
    paddingRight: 20, // Sağ boşluk
    paddingBottom: 20,  // Alt boşluk (en alttaki öğenin görünmesi için)
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
  },
  image: {
    width: 100,  // Resmin genişliği
    height: 100,  // Resmin yüksekliği
    marginRight: 10,  // Resim ile yazı arasında boşluk
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#5660c3', // Butonun arka plan rengi
    paddingVertical: 5,  // Dikeyde boşluk
    paddingHorizontal: 5,  // Yatayda boşluk
    borderRadius: 5,  // Köşeleri yuvarlat
    marginLeft: 'auto',  // Butonu sağa kaydırmak için
  },
  buttonText: {
    color: '#fff',  // Buton metninin rengi
    fontSize: 16,
  }
});
