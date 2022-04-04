import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native'

export function Lista({ childToParent }) {

    const [minSelecionado, setMinSelecionado] = useState(null);
    const tempo = [
        { minutos: 5 },
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
        const backgroundColor = item.minutos === minSelecionado ? "#6e3b6e" : "#f9c2ff";
        const color = item.minutos === minSelecionado ? 'white' : 'black';

        return (
            <ItemMin
                item={item}
                onPress={() => {
                    setMinSelecionado(item.minutos)
                    childToParent(minSelecionado)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    }

    return (
        <View >
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
        marginVertical: 8
    },
    item: {
        borderRadius: 10,
        borderWidth: 3,
        padding: 20,
        marginHorizontal: 16
    }
})