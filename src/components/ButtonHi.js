import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

// import { Container } from './styles';
export default function ButtonHi(props) {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={props.style}>{props.label}</Text>
        </TouchableHighlight>
    )
}


