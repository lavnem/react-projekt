import React, {useState} from 'react';
import { Dimensions } from 'react-native'
//import { StatusBar } from 'expo-status-bar';
import {StyleSheet,StatusBar, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

export default function Udalosti({ navigation }) {      //navigace mezi obrazovkami
    const pressHandler1 = () => {                       
      navigation.navigate('Turnaje');                   //přechod na obrazovku turnaje
    }
    const pressHandler2 = () => {
      navigation.navigate('Profil');                    //přechod na obrazovku profil
    }
    const pressHandler3 = () => {
      navigation.navigate('Zebricek');                  //přechod na obrazovku žebřiček
    }
    const pressHandler4 = () => {
      navigation.navigate('Sazky');                     //přechod na obrazovku sázky
  }
    let sirka = Dimensions.get('window').width; //vypocita sirku obrazovky
    let vyska = Dimensions.get('window').height; //vypocita vysku obrazovky
    let vyska10 = vyska/10; //vydeli vysku obrazovky deseti, protože chci pro výšku tlačítku pouze desetinu výšky obrazovky (dohromady flex 10)
    let sirka3 = sirka/3; //3 tlacitka pro navigaci, tj. chci tretinu sirky pro kazde tlacitko
    return (
      
      <View style={styles.container}>       
      <StatusBar/>
       <View style={styles.nadpis}> 
         <Text style={styles.nadpisU}>Kirtap</Text>
       </View>
       <View style={styles.obsah}><ScrollView>         
       <Text style={styles.prCara}></Text>
       <Text style={styles.plCara1}>Nadcházející turnaje</Text>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 10</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 9</Text></TouchableOpacity>
       <Text style={styles.plCara2}>Předcházející turnaje</Text>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 8</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 7</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 6</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 5</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 4</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 3</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 2</Text></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler4} style ={{height:70, width:sirka, backgroundColor:'#000',borderColor:'#777',borderWidth:1}}><Text style={{textAlign:'center',color:'yellow', padding:23}}>Oktagon 1</Text></TouchableOpacity>
       </ScrollView></View>
       <Text style={styles.prCara}></Text>
       <View style={styles.navigace}>
       <TouchableOpacity onPress={pressHandler1} style={{height:vyska10, width:sirka3, justifyContent:'center', alignItems:'center'}}><Image source={{uri: 'https://img2.gratispng.com/20181129/bua/kisspng-mixed-martial-arts-mma-gloves-protective-gear-in-s-ex-lb-merriman-signs-bare-knuckle-fighting-deal-5c00a2c67eb5e3.254786871543545542519.jpg'}} style={{height:45, width:45,}}/></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler2} style={{height:vyska10, width:sirka3, justifyContent:'center', alignItems:'center'}}><Image source={{uri: 'https://as1.ftcdn.net/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg'}} style={{height:60, width:60,}}/></TouchableOpacity>
       <TouchableOpacity onPress={pressHandler3} style={{height:vyska10, width:sirka3, justifyContent:'center', alignItems:'center'}}><Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFo8o26aEnPkJHpPBqTzoLp6euX3QzhPvqQA&usqp=CAU'}} style={{height:45, width:45,}}/></TouchableOpacity>
       </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    nadpis: {                   //nastavení oblasti nadpisu
      flex:1,
      backgroundColor:'#000',
      justifyContent:'center',
  
    },
    nadpisU: {                  //úprava textu v nadpisu
      textAlign:'center',
      color:'yellow',
      fontSize:30
    },
    prCara: {                   //nastavení prázdné čáry
      left:0,
      right:0,
      backgroundColor:'#777',
      height:2,  
    },
    plCara1: {                 //nastavení 1. plné čáry s textem (tu nejhornější)
      marginTop:1,
      left:0,
      right:0,
      backgroundColor:'#777',
      height:20,
      textAlign:'center',
      color:'#fff'  
    },
    plCara2: {                //nastavení 2. plné čáry s textem (tu spodnější)
      left:0,
      right:0,
      backgroundColor:'#777',
      height:20,
      textAlign:'center',
      color:'#fff'  
    },
    obsah: {                  //hlavní a největší část obrazovky, jsou tam turnaje
      flex:8,
      backgroundColor:'#000',
    },
    navigace: {               //nastavení spodní části obrazovky, kde se přechází mezi obrazovkami
      flex:1,
      backgroundColor:'#000',
      flexDirection:'row'
    },
    

  });
  