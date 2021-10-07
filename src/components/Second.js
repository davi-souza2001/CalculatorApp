import React from 'react';
import { Text } from 'react-native';

import style from "./style";

// import { Container } from './styles';
export default function First(props) {
    return (
        <>
            <Text style={style.Second}>{props.textUser}</Text>
        </>
    )
}