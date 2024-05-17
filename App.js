import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>

      <View style={styles.container2}>
        <Image
        source={{uri:'./img/list.svg'}} 
        style={ styles.container2 }
        />
   
        <Image 
        source={{uri: './img/search.svg'}}
        style={ styles.container2 }
        />
      </View>
      
      <Text style={styles.titulopag}>Kalunga</Text>

      <Text style={{color: 'black', fontSize: 25, backgroundColor: '#3CB371', width: '100%', height: 65, textAlign: 'center'}}>Sale R$661,78</Text>

      <Image
      source={{uri:'https://br.octoshop.com/media/catalog/product/cache/f392dc84e34552521f3f08ff16a74ad7/7/7/771-1.jpg'}}
      style={styles.imagem}
      />

      <Text style={{fontSize: 15, alignItems: 'center', color: '#A9A9A9', flex: 0}}>○  ○  ○  •  ○  ○  ○  ○  </Text>

      <Text style={styles.titulo}>Headset Gamer Razer Kraken Kitty Chroma Quartz</Text>

      <Text style={{textAlign: 'center', color: '#A9A9A9'}}>Cobra do trovão da bandeira Razer,
      modelo rz04-02980200-r3m1, 
      Kitty Ears e auriculares com tecnologia Razer Chroma, 
      Iluminação dinâmica durante a transmissão, 
      Microfone com cancelamento de ruído ativo,
      Áudio espacial THX, Almofadas de ouvido com gel refrescante</Text>

      <View>
      <Button 
      style={styles.button}
      title='ADD TO CART'
      color='#3CB371'
      />     
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50
  },

  container2: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  titulopag: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#DCDCDC',
    width: '100%',
    height: 80
  },

  titulo: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#DCDCDC'
  },

  imagem: {
    marginTop: 30,
    alignSelf: 'center',
    width: 450,
    height: 500,
    resizeMode: 'contain',
    flex: 0
  },

  imagem2: {
    width: 20,
    height: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 50
  },

  imagem3: {
    width: 20,
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 50
  },

  button:{
    width: '50%',
  },

});
