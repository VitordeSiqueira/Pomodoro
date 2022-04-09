import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Conteudo } from './components/Conteudo/Conteudo';

import { Notification } from './components/Notification/Notification';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="light-content"/> 
        <Cabecalho />
        <Conteudo />
    </SafeAreaView>
    // <Notification />
  );
}

const styles = StyleSheet.create({
});
