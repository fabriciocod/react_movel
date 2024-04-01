import { useState } from 'react';
import { Button, View, Text} from 'react-native';



const Cliques = () => {
    const [cliques, setCliques] = useState(0);

    return (
        <View>
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

export default Cliques;


