import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from './componnents/Icon';

// import { Container } from './styles';

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 50,
  },
});

const App: React.FC = () => {
  return (
    <View style={style.App}>
      <Text style={style.title}>Welcome To fly </Text>
      <Icon icon="guitar" size={150} />
      <Icon icon="rock" size={200} />
    </View>
  );
};

export default App;
