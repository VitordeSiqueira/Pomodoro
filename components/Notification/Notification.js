import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState  } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import { Tempo } from '../Tempo/Tempo';



export function Notification() {

    const [minuto, setMinuto] = useState(0);

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    
    return (
        <View style={styles.container}>
          <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
          <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });