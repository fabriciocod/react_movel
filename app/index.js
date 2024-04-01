import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'


const getNomeCompleto = (nome, sobrenome) =>{
  return nome + ' ' + sobrenome;
}

const Cat = ({id, nome, sobrenome, idade}) =>{
  // const name = "Gafield"

  // let texto ="anos";
  // if(idade <= 1){
  //   texto = "ano";
  // }

  const texto = (idade <= 1) ? "ano" : "anos" // if ternário utilizar apenas quando houver apenas uma condição para afirmação.

  return (
    <Link href={{
      pathname: "/gatos/[id]",
      params:{id: id}
    }}>Olá, Eu sou {getNomeCompleto(nome, sobrenome).toUpperCase()} tenho {idade} {texto}! E meu id {id}</Link>
  
  );
}

function IFAL() {

 

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Inicalização do App em React Native</Text> */}
      <Cat id={1} nome="Black" sobrenome="Moon" idade={4}/>
      <Cat id={2}nome="Garfilde" sobrenome="3°" idade={45}/>
      <Cat id={3}nome="Apolo" sobrenome="Grego" idade={8}/>
      <Cat id={4} nome="Mandachuva" sobrenome="trambiqueiro" idade={1}/>
      <StatusBar style="auto" />

      <Link href="/cliques">Cliques</Link>
      <Link href="/calc">Abrir Calculadora</Link>
      
      <Link href="/calc" asChild>
        <Pressable>
          <Text>Abrir Calculadora com o Pressable</Text>
        </Pressable>
      </Link>

      <Link href="/calc" asChild>
        <Button title="Abrir calculadora com Buttonr"/>
      </Link>
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

export default IFAL;