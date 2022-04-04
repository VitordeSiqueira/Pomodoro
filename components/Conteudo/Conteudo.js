import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'
import { Botao } from '../Botao/Botao'

export function Conteudo() {

    const [minuto, setMinuto] = useState(5)
  
    const childToParent = (childdata) => {
        setMinuto(childdata)
        console.log(minuto)
    }

    return (
        <View >
            <Tempo minuto={minuto}/>
            <Lista childToParent={childToParent}/>
            <Botao />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ponto: {
        fontSize: 80,
        color: '#fff'
    }
})