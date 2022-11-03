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
    return (
      
      <View style={styles.container}>
      <StatusBar/>
       <Text style={styles.nadpis}>Kirtap</Text>
       <Text style={styles.plnCara}>Žebříček</Text>
       <ScrollView><View>
         
        </View></ScrollView>
        <Text style={styles.cara}></Text>
       <View style={{alignSelf:'center'}}>      
       <Text>
       <TouchableOpacity onPress={pressHandler1} style={{backgroundColor:'#000', height:50, width:sirka/3,right:sirka/3,}}><Text style={{color:'yellow',textAlign:'center', padding:15}}>Turnaje</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler2} style={{backgroundColor:'#000', height:50, width:sirka/3,}}><Text style={{color:'yellow',textAlign:'center',padding:15}}>Profil</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler3} style={{backgroundColor:'#000', height:50, width:sirka/3, left:sirka/3,}}><Text style={{color:'yellow',textAlign:'center',padding:15}}>Žebříčky</Text></TouchableOpacity>
       </Text>   
       </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    nadpis: {
      fontSize:34,
      color:'yellow',
      textAlign:'center',
      paddingTop:10,
      paddingBottom:10
    },
    cara: {
      left:0,
      right:0,
      backgroundColor:'#777',
      height:1, 
    },
    plnCara: {
      left:0,
      right:0,
      backgroundColor:'#777',
      height:20, 
      color:'#fff',
      textAlign:'center',
      marginTop:1
    }
  });
  