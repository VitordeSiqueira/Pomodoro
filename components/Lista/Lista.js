import React from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'

export function Lista() {
    const tempo = [
        {minutos: 5},
        {minutos: 10},
        {minutos: 20},
        {minutos: 25},
        {minutos: 30},
        {minutos: 35},
        {minutos: 40},
        {minutos: 45},
        {minutos: 50},
        {minutos: 55},
        {minutos: 60},
    ]

function press(min) {
    return min
}
function Min({ minutos }) {
    function a() {
        console.log(minutos);
    }
    return (
        <View >
            <TouchableOpacity style={styles.caixa} onPress={a}>
                {minutos}</TouchableOpacity>
        </View>
    )
}
    return (
        <View style={styles.container}>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={tempo}
                renderItem={({ item }) => <Min  minutos={item.minutos}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center'
    },
    caixa: {
        color: 'blue',
        backgroundColor: '#fff',
        borderWidth: 1,
        marginTop: 16,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        paddingVertical: 4
    },
})