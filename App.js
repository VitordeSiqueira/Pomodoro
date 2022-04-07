import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Conteudo } from './components/Conteudo/Conteudo';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="light-content"/> 
        <Cabecalho />
        <Conteudo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
