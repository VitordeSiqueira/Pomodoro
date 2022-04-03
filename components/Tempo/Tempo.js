import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function Tempo(props) {
    return (
        <View style={styles.folha}>
            <Text style={styles.titulo}>{props.tempo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    folha: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 42
    }
})
