import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';

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
      <Text style={styles.buttonText}>Entra</Text>
      </TouchableOpacity>

      <Text style={styles.text_recupera}>Recuperar Senha</Text>

      <Text style={styles.text_aviso}>
        O acesso está protegido pelo Google{'\n'}
        reCAPTCHA para garantir que você não é um robô.
        Saiba mais.
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 225,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#b3b3b3',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#BD0303',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // borderWidth: 3,
    // borderColor: '#404040',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  text_recupera: {
    color: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text_aviso: {
    color: '#fff',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TelaLogin;