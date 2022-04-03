import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Tempo } from '../Tempo/Tempo'
import { Lista } from '../Lista/Lista'

export function Conteudo() {
    return (
        <View style={styles.container}>
            <Tempo tempo={20} />
            <Text style={styles.ponto}>:</Text>
            <Tempo tempo={0}/>
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