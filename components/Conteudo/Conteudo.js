import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'
import { Botao } from '../Botao/Botao'

export function Conteudo() {

    const [minutoEscolhido, setMinutoEscolhido] = useState(null)
    const [minuto, setMinuto] = useState(null)
    const [status, setStatus] = useState(null)
    const [cronometroZeradoAntes, setCronometroZeradoAntes] = useState(null)
    const [cronometroZeradoDepois, setCronometroZeradoDepois] = useState(null)
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setMinuto(minutoEscolhido)
    }, [minutoEscolhido]);

    useEffect(() => {
        if (contador == 0) {
            setContador(contador + 1)
        } else {
            setCronometroZeradoDepois(true)
        }
    }, [cronometroZeradoAntes]);

    const minutoEscolhidoLista = (minutoEscolhidoListaValor) => {
        setMinutoEscolhido(minutoEscolhidoListaValor)
    }

    const statusCronometro = (status) => {
        setStatus(status)
    }

    const cronometroZeradoStatus = (cronometroZeradoStatus) => {
        setCronometroZeradoAntes(cronometroZeradoStatus)
    }

    return (
        <View >
            <Tempo minuto={minuto} status={status} cronometroZeradoStatus={cronometroZeradoStatus} />
            <Lista minutoEscolhidoLista={minutoEscolhidoLista} />
            <Botao statusCronometro={statusCronometro} cronometroZerado={cronometroZeradoDepois} />
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