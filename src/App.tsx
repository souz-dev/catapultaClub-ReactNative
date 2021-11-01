import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
  <SafeAreaView style={style.App}>
      <Text style={style.title}>Inital Project </Text>
      </SafeAreaView>
  
  );
}

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 50
  }
})
