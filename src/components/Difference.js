import React from 'react';
import { Text, Platform } from 'react-native';

export default function ButtonHi() {
    if(Platform.OS === "android") {
        return <Text>Android</Text>
    } else if(Platform.OS === "ios") {
        return <Text>ios</Text>
    } else {
        return <Text>Ue ??</Text>
    }
}