import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'
import { Botao } from '../Botao/Botao'

export function Conteudo() {

    const [minuto, setMinuto] = useState(null)
    const [minutos, setMinutos] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        console.log(`O minuto é ${minuto}`)
        setMinutos(minuto)
    },[minuto]);
  
    const childToParent = (childdata) => {
        setMinuto(childdata)
    }

    const statusCronometro = (status) => {
        setStatus(status)
        //console.log(status, "statuscronometro")
    }

    return (
        <View >
            <Tempo minuto={minutos} status={status}/>
            <Lista childToParent={childToParent}/>
            <Botao statusCronometro={statusCronometro}/>
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