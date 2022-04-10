import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'

export function Lista(props) {

    const [minSelecionado, setMinSelecionado] = useState(null);
    const tempo = [
        { minutos: 1 },
        { minutos: 10 },
        { minutos: 20 },
        { minutos: 25 },
        { minutos: 30 },
        { minutos: 35 },
        { minutos: 40 },
        { minutos: 45 },
        { minutos: 50 },
        { minutos: 55 },
        { minutos: 60 },
    ]

    const ItemMin = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.caracter, textColor]}>{item.minutos}</Text>
        </TouchableOpacity>
    )
    const renderItemMin = ({ item }) => {
        const backgroundColor = item.minutos === minSelecionado ? "#ed8277" : "#fff";
        const color = item.minutos === minSelecionado ? '#fff' : '#e74d3d';

        return (
            <ItemMin
                item={item}
                onPress={() => {
                    setMinSelecionado(item.minutos)
                    props.minutoEscolhidoLista(item.minutos)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={tempo}
                renderItem={renderItemMin}
                keyExtractor={(item) => item.minutos}
                extraData={minSelecionado}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    caracter: {
        fontSize: 32,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100,
    },
    item: {
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 16,
    }
})