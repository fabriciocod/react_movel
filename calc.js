import { useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';

const Calculadora = () => {
    const [parcela1, setParcela1] = useState(0);
    const [parcela2, setParcela2] = useState(0);
    const [soma, setSoma] = useState(0);

    return (
        <View>
            <Text>Calculadora</Text>
            <TextInput maxLength={3} defaultValue={parcela1.toString()} onChangeText={(texto) => setParcela1(Number(texto))} keyboardType='numeric'/>
            <TextInput defaultValue={parcela2.toString()} onChangeText={(texto) => setParcela2(Number(texto))} keyboardType='numeric' returnKeyType='send'/>
            <Button title="Soma" onPress={() => setSoma(parcela1 + parcela2)}/>
            <Text>Soma: {soma}</Text>

            <TextInput autoCapitalize='words'/>
            <TextInput secureTextEntry={true}/>
        </View>
    );
}

export default Calculadora;