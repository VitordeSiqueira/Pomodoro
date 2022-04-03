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
        backgroundColor: '#2d2b90',
        textAlign: 'center',
        paddingVertical: '15px'
    },
    titulo: {
        fontSize: 16,
        color: '#fff'
    }
})