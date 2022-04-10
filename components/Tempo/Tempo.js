import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert, Vibration } from 'react-native'


import * as Notifications from 'expo-notifications';

//Config SDK Notification
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export function Tempo(props) {
    const [minuto, setMinuto] = useState(0);
    const [segundo, setSegundo] = useState(5);
    const [iniciado, setIniciado] = useState(false);

    //Quando a props.status é alterado, irá atualizar a variavel iniciado de acordo com o valor passado pelo Conteudo
    useEffect(() => {
        setIniciado(props.status)
    }, [props.status]);

    //Quando a props.minuto é alterado, irá atualizar a variavel minuto de acordo com o valor passado pelo Conteudo
    useEffect(() => {
        setIniciado(false)
        setMinuto(props.minuto)
        setSegundo(0)
        props.cronometroZeradoStatus(false)
    }, [props.minuto]);

    //Função Alerta
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Tempo finalizado!",
            "Hora de dar um descanso para a mente!!",
            [
                { text: "OK", onPress: () => Vibration.cancel() }
            ]
        );

    //Realiza a contagem regressiva da variavel minuto e segundo de acordo com os valores passados (segundo sempre vai iniciar em 0)
    useEffect(() => {
        if (iniciado == true) {
            //Utiliza a função setInterval do modulo Timers do NodeJs, que irá executar o codigo dentro dela após o tempo definido de 1000ms
            let intervalo = setInterval(() => {
                clearInterval(intervalo);
                if (segundo === 0) {
                    if (minuto !== 0) {
                        //Diminui 1 do min e define 59 seg
                        setSegundo(59);
                        setMinuto(minuto - 1);
                    } else {
                        //Timer zerado vai retornar a props cronometroZeradoStatus = true para Conteudo
                        props.cronometroZeradoStatus(true)
                        //Chamando a função do SDK Notification
                        schedulePushNotification();
                        //Chamando a função Alerta
                        createTwoButtonAlert()
                        // Vibration.vibrate(1 * ONE_SECOND_IN_MS)
                    }
                } else {
                    //Diminui 1 seg
                    setSegundo(segundo - 1);
                }
            }, 1000);
        }
        else {
            //Caso a varivel iniciado seja false, ou seja, o timer esteja parado, vai definir os segundo e minutos de acordo com os valores que eram no momento em que foi pausado o timer
            setSegundo(segundo);
            setMinuto(minuto);
        }
    }, [segundo, iniciado]);

    //Variveis para adicionar o 0 na frente dos minutos e segundos, quando os mesmo forem < 10
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

//Função SDK Notification
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Tempo Finalizado ⏰",
            body: 'Hora de dar um descanso para a mente!!',
            data: { data: 'goes here' },
        },
        trigger: null,
    });
}

const styles = StyleSheet.create({
    bloco: {
        borderColor: '#8fb9ff',
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        marginTop: 50,

        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    caracter: {
        color: '#e74d3d',
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 80
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#e74d3d',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
        padding: 10
    }
})
