import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome, sobrenome) =>{
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome}) =>{
  const name = "Gafield"
  return <Text>Hello, I am {getNomeCompleto(nome, sobrenome).toUpperCase()}!</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Inicalização do App em React Native</Text> */}
      <Cat nome="Black" sobrenome="Moon"/>
      <Cat nome="Garfilde" sobrenome="3°"/>
      <Cat nome="Apolo" sobrenome="Grego"/>
      <StatusBar style="auto" />
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
