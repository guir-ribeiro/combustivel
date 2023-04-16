import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import ModalResultado from './src/components/Modal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [valorAlcool, setValorAlcool] = useState(0);
  const [valorGasolina, setValorGasolina] = useState(0);

  function sairMordal(){
    setModalVisible(false)
  }

  let Escolha = function(valorAlcool, valorGasolina){
    const divisao = parseFloat(valorAlcool) / parseFloat(valorGasolina);
    console.log(divisao)

    if (divisao === 1){
      return 'Qualquer um'
    } else if(divisao > 0.7){
      return 'Gasolina'
    }else{
      return 'Álcool'
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('./src/imagens/logo.png')}
        />
        <Text  style={styles.title}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label} >Álcool (Preço por litro): </Text>
        <TextInput 
          style={styles.input} 
          placeholder='R$' 
          keyboardType='numeric'
          onChangeText={(value)=>setValorAlcool(value)} />
        <Text style={styles.label}>Gasolina (Preço por litro): </Text>
        <TextInput 
          style={styles.input} 
          placeholder='R$' 
          keyboardType='numeric'
          onChangeText={(value)=>setValorGasolina(value)}
          />
        <TouchableOpacity 
          style={styles.btnArea} 
          onPress={()=>{
            setModalVisible(true)
          }}
          >
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="inverted" />

      <ModalResultado 
        modalVisible={modalVisible} 
        fechar={sairMordal} 
        Escolha={Escolha(valorAlcool,valorGasolina)}
        valorAlcool={valorAlcool}
        valorGasolina={valorGasolina}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    alignItems:'center'
  },
  title:{
    fontSize:25,
    color:'#fff',
    fontWeight:'bold',
    marginTop:15
  },
  form:{
    width:'90%',
    marginTop:20
  },
  label:{
    fontSize:18,
    color:'#fff',
    marginBottom:5
  },
  input:{
    backgroundColor:'#fff',
    borderRadius:8,
    padding:10,
    marginBottom:20
  },
  btnArea:{
    backgroundColor:'#ef4130',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
  },
  btnText:{
    color:'#fff',
    fontSize:25,

  }
});
