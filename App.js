import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import foto from './assets/foto12.jpg';
import foto1 from './assets/ice-americano.jpg';

const App = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ width: 80, height: 80, backgroundColor: 'blue' }}></View>
      <Text>Putri Ramadhani </Text>
      <Npm />
      <Photo />
      <Text>Program Studi Teknik Informatika</Text>
      <Text>Fakultas Teknik</Text>
      <Text>Universitas Islam Riau</Text>
      <TextInput style={{ borderWidth: 1 }} />
      <Menu />
    </View>
  );
};

const Npm = () => {
  return <Text>193510387 </Text>;
};

const Photo = () => {
  return <Image source={foto} style={{ width: 200, height: 150 }} />;
};

class Menu extends Component {
  render() {
    return (
      <View>
        <Image
          source={foto1}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginLeft: 25,
          }}
        />
        <Text style={{ color: 'brown', fontSize: 24 }}>Ice Americano </Text>
      </View>
    );
  }
}

export default App;
