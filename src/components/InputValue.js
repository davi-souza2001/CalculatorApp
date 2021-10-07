import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function ButtonHi() {
    const [test, setTest] = useState("");
    
    return (
            <View>
                <Text>{test}</Text>
                <TextInput
                placeholder="Digite seu nome"
                value={test}
                onChangeText={value => setTest(value)}
                />
            </View>
       )
}