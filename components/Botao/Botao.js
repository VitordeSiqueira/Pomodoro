import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { View } from 'moti';

export function Botao(props) {

    const [iniciado, setIniciado] = useState(false)
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(null)

    useEffect(() => {
        if (props.cronometroZerado == true) {
            setIniciado(false)
            setBotaoDesabilitado(true)
            props.statusCronometro(false)
            props.listaDesativada(false)
        } else if (props.cronometroZerado == false) {
            setIniciado(false)
            setBotaoDesabilitado(false)
            props.statusCronometro(false)
        }
    }, [props.cronometroZerado]);

    //Função para alterar a variavel iniciado assim como retornar para o Conteudo qual status o cronometro deverá ter
    function mudarStatus() {
        //Caso iniciado seja false e foi chamada a função mudarStatus, irá definir iniciado = true e retornar para Conteudo o valor true, visto que o timer deve ser iniciado 
        if (iniciado == false) {
            setIniciado(true)
            props.statusCronometro(true)
            props.listaDesativada(true)
        } 
        //Caso iniciado seja true e foi chamada a função mudarStatus, irá definir iniciado = false e retornar para Conteudo o valor false, visto que o timer deve ser parado 
        else {
            setIniciado(false)
            props.statusCronometro(false)
            props.listaDesativada(false)
        }
    }

    return (
        <View
        from={{
            rotate: '0deg',
            opacity: 0,
            translateY: -10
        }}
        animate={{
            rotate: '360deg',
            opacity: 1,
        }}
        transition={{
            type: 'timing',
            duration: 1000
        }}
        
        style={styles.container}>
            <TouchableOpacity
                onPress={mudarStatus}
                style={styles.button}
                disabled={botaoDesabilitado}
            >
                <Feather
                    name={iniciado ? 'pause' : 'play'}
                    size={60}
                    color='white'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#bf392b",
        height: 100,
        width: 100,
        justifyContent: 'center',
        borderRadius: 50
    },

})