import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Feather } from '@expo/vector-icons';

export function Botao({ statusCronometro }) {

    const [iniciado, setIniciado] = useState(false)
    
    function mudarStatus() {
        if(iniciado == false) {
            setIniciado(true)
            statusCronometro(true)
        } else {
            setIniciado(false)
            statusCronometro(false)
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