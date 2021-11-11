import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'grey',
  },
  title: {
    color: 'white',
    fontSize: 50,
  },
});

const App: React.FC = () => {
  return (
    <View style={style.App}>
      <Text style={style.title}>Welcome To fly </Text>
    </View>
  );
};

export default App;
