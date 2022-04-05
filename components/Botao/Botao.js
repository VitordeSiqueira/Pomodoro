import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Feather } from '@expo/vector-icons';

export function Botao(props) {

    const [iniciado, setIniciado] = useState(false)

    useEffect(() => {
        if (props.cronometroZerado == true) {
            setIniciado(false)
        }
    }, [props.cronometroZerado]);

    //Função para alterar a variavel iniciado assim como retornar para o Conteudo qual status o cronometro deverá ter
    function mudarStatus() {
        //Caso iniciado seja false e foi chamada a função mudarStatus, irá definir iniciado = true e retornar para Conteudo o valor true, visto que o timer deve ser iniciado 
        if (iniciado == false) {
            setIniciado(true)
            props.statusCronometro(true)
        } 
        //Caso iniciado seja true e foi chamada a função mudarStatus, irá definir iniciado = false e retornar para Conteudo o valor false, visto que o timer deve ser parado 
        else {
            setIniciado(false)
            props.statusCronometro(false)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={mudarStatus}
                style={styles.button}
            >
                <Feather
                    name={iniciado ? 'pause' : 'play'}
                    size={60}
                    color='black'
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
        backgroundColor: "#DDDDDD",
        height: 100,
        width: 100,
        justifyContent: 'center',
        backgroundColor: '#65727B',
        borderRadius: 50
    },

})