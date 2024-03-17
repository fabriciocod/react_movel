import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyteSheet} from 'react-native';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Email', email);
    console.log('Senha', senha);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/netflix-logo.png')}
        style={styles.logo}
      />
      <TextInput
      style={styles.input}
      placeholder="Usuário ou Email"
      onChangeText={texto => setEmail(texto)}
      value={email}
      />
      <TextInput
      style={styles.input}
      placeholder="Senha"
      onChangeText={texto => setSenha(texto)}
      value={senha}
      secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text styles={styles.buttonText}>Entra</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TelaLogin