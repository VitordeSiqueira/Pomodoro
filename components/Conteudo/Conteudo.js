import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'
import { Botao } from '../Botao/Botao'

export function Conteudo() {

    const [minutoEscolhido, setMinutoEscolhido] = useState(null)
    const [minuto, setMinuto] = useState(null)
    const [statusAntes, setStatusAntes] = useState(null)
    const [statusDepois, setStatusDepois] = useState(null)
    const [cronometroZeradoAntes, setCronometroZeradoAntes] = useState(null)
    const [cronometroZeradoDepois, setCronometroZeradoDepois] = useState(null)
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setMinuto(minutoEscolhido)
    }, [minutoEscolhido]);

    useEffect(() => {
        setStatusDepois(statusAntes)
    }, [statusAntes]);

    useEffect(() => {
        if (contador == 0) {
            setContador(contador + 1)
        } else {
            if (cronometroZeradoAntes == true) {
                setCronometroZeradoDepois(true)
            } else {
                setCronometroZeradoDepois(false)
            }
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

    return (
        <View >
            <Tempo minuto={minuto} status={statusDepois} cronometroZeradoStatus={cronometroZeradoStatus} />
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