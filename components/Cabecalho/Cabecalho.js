import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function Cabecalho() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pomodoro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b5d1ff',
        textAlign: 'center',
        paddingVertical: '15px'
    },
    titulo: {
        fontSize: 40,
        color: '#000'
    }
})