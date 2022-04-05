import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function Tempo(props) {
    const [minuto, setMinuto] = useState(props.minuto);
    const [segundo, setSegundo] = useState();
    const [iniciado, setIniciado] = useState(props.status);
    
    useEffect(() => {
        setIniciado(props.status)
        setSegundo(0)
        console.log(props.status, 'status')
    },[props.status]);

    useEffect(() => {
        setMinuto(props.minuto)
        console.log(props.minuto, 'propsminuto')
    },[props.minuto]);

    useEffect(() => {
        if (iniciado == true) {
            let intervalo = setInterval(() => {
                clearInterval(intervalo);

                if (segundo === 0) {
                    if (minuto !== 0) {
                        //Diminui 1 do min e define 59 seg
                        setSegundo(59);
                        setMinuto(minuto - 1);
                    } else {
                        //Timer zerado
                        //let minuto = 19
                        //let segundo = 59;
                        //setSegundo(segundo);
                        //setMinuto(minuto);
                    }
                } else {
                    //Diminui 1 seg
                    setSegundo(segundo - 1);
                }
            }, 1000);
        }
        else{
            setSegundo(0);
            setMinuto(0);
        }
    }, [segundo]);

    const timerMinuto = minuto < 10 ? `0${minuto}` : minuto;
    const timerSegundo = segundo < 10 ? `0${segundo}` : segundo;

    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text style={styles.caracter}>{timerMinuto}</Text>
            </View>
            <Text style={styles.caracter} >:</Text>
            <View style={styles.bloco}>
                <Text style={styles.caracter}>{timerSegundo}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    bloco: {
        borderColor: '#8fb9ff',
        borderRadius: 5,
        borderWidth: 5,
        paddingHorizontal: 5
    },
    caracter: {
        color: '#000',
        fontSize: 80
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#b5d1ff',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
        padding: 10
    }
})
