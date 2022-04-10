import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'
import { Botao } from '../Botao/Botao'

export function Conteudo() {

    const [minutoEscolhido, setMinutoEscolhido] = useState(null)
    const [minuto, setMinuto] = useState(null)
    const [statusAntes, setStatusAntes] = useState(false)
    const [statusDepois, setStatusDepois] = useState(null)
    const [cronometroZeradoAntes, setCronometroZeradoAntes] = useState(null)
    const [cronometroZeradoDepois, setCronometroZeradoDepois] = useState(null)
    const [listaStatusDesativada, setListaDesativada] = useState(false)

    useEffect(() => {
        setMinuto(minutoEscolhido)
    }, [minutoEscolhido]);

    useEffect(() => {
        setStatusDepois(statusAntes)
    }, [statusAntes]);

    useEffect(() => {
        if (cronometroZeradoAntes == true) {
            setCronometroZeradoDepois(true)
        } else {
            setCronometroZeradoDepois(false)

        }
    }, [cronometroZeradoAntes]);

    const minutoEscolhidoLista = (minutoEscolhidoListaValor) => {
        setMinutoEscolhido(minutoEscolhidoListaValor)
    }

    const statusCronometro = (status) => {
        setStatusAntes(status)
    }

    const cronometroZeradoStatus = (cronometroZeradoStatus) => {
        setCronometroZeradoAntes(cronometroZeradoStatus)
    }

    const listaAtivaStatus = (status) => {
        setListaDesativada(status)
    }

    return (
        <View >
            <Tempo minuto={minuto} status={statusDepois} cronometroZeradoStatus={cronometroZeradoStatus} />
            <Lista minutoEscolhidoLista={minutoEscolhidoLista} listaDesativada={listaStatusDesativada} />
            <Botao statusCronometro={statusCronometro} cronometroZerado={cronometroZeradoDepois} listaDesativada={listaAtivaStatus} />
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