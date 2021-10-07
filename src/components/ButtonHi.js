import React from 'react';
import { Button, Text } from 'react-native';

import style from "./style";

// import { Container } from './styles';
export default function ButtonHi() {
    function sayHi() {
        console.warn("Hi world!");
    }

    return (
        <Button title="Exec" onPress={sayHi}/>
    )
}


