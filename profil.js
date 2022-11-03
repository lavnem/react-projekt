import React, {useState} from 'react';
import { Dimensions } from 'react-native'
//import { StatusBar } from 'expo-status-bar';
import {StyleSheet,StatusBar, View, Text, ScrollView, TouchableOpacity} from 'react-native';

export default function Udalosti({ navigation }) {
    const pressHandler1 = () => {
      navigation.navigate('Turnaje');
    }
    const pressHandler2 = () => {
      navigation.navigate('Profil');
    }
    const pressHandler3 = () => {
      navigation.navigate('Zebricek');
    }
    
    let sirka = Dimensions.get('window').width;
   
    const [tipy, setTipy] = useState(0);
    const [sleduji, setSleduji] = useState('0');
    const [sledujici, setSledujici] = useState('0');
    return (
      
      <View style={styles.container}>
      <StatusBar/>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },

  });
  