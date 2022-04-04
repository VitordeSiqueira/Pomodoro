import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Conteudo } from './components/Conteudo/Conteudo';
import { Lista } from './components/Lista/Lista';
import { Botao } from './components/Botao/Botao';
export default function App() {
  return (
    <View>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({

});
