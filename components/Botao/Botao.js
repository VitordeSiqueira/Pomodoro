import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

export function Botao() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            >
                <Feather
                name="play"
                size={24}
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
        backgroundColor: "#DDDDDD",
        padding: 10,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#65727B',
        borderRadius: 50
      },

})