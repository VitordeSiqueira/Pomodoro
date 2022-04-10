import { Dimensions } from 'react-native';
import 'react-native-reanimated'

import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Conteudo } from './components/Conteudo/Conteudo';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="#e74d3d" barStyle='light-content'/>   
         <Cabecalho />
        <Conteudo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74d3d',
    width: Dimensions.get('window').width,
	  height: Dimensions.get('window').height,
  },
});
