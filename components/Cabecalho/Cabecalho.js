import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native';

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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    titulo: {
        fontSize: 40,
        color: '#000',
        textAlign: 'center',
    }
})