import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome) =>{
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome, idade}) =>{
  // const name = "Gafield"

  // let texto ="anos";
  // if(idade <= 1){
  //   texto = "ano";
  // }

  const texto = (idade <= 1) ? "ano" : "anos" // if ternário utilizar apenas quando houver apenas uma condição para afirmação.

  return <Text>Olá, Eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()} tenho {idade} {texto}!</Text>
}

export default IFAL;

function IFAL() {

  const [cliques, setCliques] = useState(0);

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Inicalização do App em React Native</Text> */}
      <Cat nome="Black" sobrenome="Moon" idade={4}/>
      <Cat nome="Garfilde" sobrenome="3°" idade={45}/>
      <Cat nome="Apolo" sobrenome="Grego" idade={8}/>
      <Cat nome="Mandachuva" sobrenome="trambiqueiro" idade={1}/>
      <StatusBar style="auto" />

      <Button title="Aperte este botão" onPress={() => {
        setCliques(cliques + 1);
      }}/>

<Button title="Aperte para Zera" onPress={() => {
        setCliques(0);
      }}/>
      
      <Text>Quantidade de cliques: {cliques}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
