import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

export default function App() {
  const [showNewView, setShowNewView] = useState(false);




  const NewView = () => {
    const [number, onChangeNumber] = React.useState('');
    const [text, onChangeText] = React.useState('Useless Text');
    return (


      <SafeAreaView style={styles.container}>

        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter number in seconds"
          placeholderTextColor="white"
          keyboardType="numeric"
        /> */}

        <Timer />


        <TouchableOpacity style={styles.button} onPress={() => setShowNewView(false)}>
          <Text style={styles.text}>Return</Text>

        </TouchableOpacity>
      </SafeAreaView>

    );
  }



  const Homeview = () => {
    return (
      <View style={styles.container}>

        <Image style={styles.Image} source={require('./assets/logo.png')} />
        <TouchableOpacity style={styles.button} onPress={() => setShowNewView(true)}>
          <Text style={styles.text}>Press here</Text>

        </TouchableOpacity>
      </View>
    );
  }

  return (

    showNewView ? <NewView /> : <Homeview />

  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(251, 90, 6)'
  },
  Image: {
    width: 300,
    height: 300,

  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,

  },
  text: {
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
