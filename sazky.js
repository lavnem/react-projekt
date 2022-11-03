import { Dimensions } from 'react-native';
import React, {useState} from 'react';
import { Platform ,StyleSheet,View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import Slider from "react-native-slider";

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
  const [seekbarValue, setSeekbarValue] = useState(0);
  //const [kurz,setKurz]=useState(0);
  var kurz = 1.5;

  const bojovnici = [' ', 'Connor McGregor','Dustin Poirier'];
  const typeWin = ['', 'KO/TKO','Submise','Body'];
  const roundWin =[0, 1, 2, 3];
  var ArrayOdeslat = new Array(4); //prázdné pole pro zapsání výběru s velikostí 4 indexů pro boj/win/kolo/pocetBodu

  const [fighter, setFighter] = useState(0); //hook pro obarvení výběru uživatele fightera
  const [winType, setWinType] = useState(0); //hook pro obarvení výběru uživatele typu vitezstvi
  const [winRound, setWinRound] = useState(0); //hook pro obarvení výběru uživatele kola

  const fighter1 = ()=> { //bojovnici
    setFighter(1);
    /*ArrayOdeslat.fill(bojovnici[0],0,1);
    console.log(ArrayOdeslat[0]);*/
  }
  const fighter2 = ()=> {
    setFighter(2);
  }
  const KO = ()=> { //win typy
    setWinType(1);
  }
  const Sub = ()=> {
    setWinType(2);
  }
  const Body = ()=> {
    setWinType(3);
  }
  const round_1 = ()=> { //kola
    setWinRound(1);
  }
  const round_2 = ()=> {
    setWinRound(2);
  }
  const round_3 = ()=> {
    setWinRound(3);
  }

  if(fighter == 1 || fighter == 2) //podminka zda fighteri byly vybrani
  {
      ArrayOdeslat[0]= bojovnici[fighter]; // setnuti 0 indexu v poli pro odeslani s vyberem jakozto jmeno daneho vybraneho fightera
    if(winType > 0 || winType <= 3) //podminka zda win type byl vybran
    {
      ArrayOdeslat[1]= typeWin[winType]; //setnuti 1 indexu v poli na vybraný win type
      if(winRound > 0 || winRound <= 3) //podminka zda win round byl vybran
      {
        ArrayOdeslat[2]= roundWin[winRound]; //setnuti 2 indexu v poli na vybraný win round
        if(seekbarValue > 0 || seekbarValue <= 100) //podminka zda jsou vybrany bodu pro vsazeni
        {
          ArrayOdeslat[3]= seekbarValue; //setnuti 3 indexu hodnotou vybranych xp/bodu
          //console.log(ArrayOdeslat); pro kontrolu funkcnosti
        }
      }
    }
  }




  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.nadpis}>Sázka</Text>
        <Text style={styles.cara}></Text>
        <Text style={{color:'#fff', fontSize:18, textAlign:'center'}}>Zápasník</Text>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: fighter === 1 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:sirka/7}} onPress={fighter1}><Text>M</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: fighter === 2 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:(sirka/6)*4,marginTop:-80,}} onPress={fighter2}><Text>P</Text></TouchableOpacity>
        <Text style={{color:'#fff', left:sirka/10}}>Connor McGregor</Text>
        <Text style={{color:'#fff', left:(sirka/10)*6.5,marginTop:-19}}>Dustin Poirier</Text>
        <Text style={styles.cara}></Text>
        <Text style={{color:'#fff', fontSize:18, textAlign:'center'}}>Způsob ukončení</Text>
        <Text style={{paddingTop:0}}></Text>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winType === 1 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:sirka/7,}} onPress={KO}><Text>KO/TKO</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winType === 2 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:sirka/2.5,marginTop:-80,}} onPress={Sub}><Text>Submise</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winType === 3 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:(sirka/6)*4,marginTop:-80,}} onPress={Body}><Text>Body</Text></TouchableOpacity>
        <Text style={{paddingTop:1}}></Text>
        <Text style={styles.cara}></Text>
        <Text style={{color:'#fff', fontSize:18, textAlign:'center'}}>Kolo</Text>
        <Text style={{paddingTop:0}}></Text>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winRound === 1 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:sirka/7,}} onPress={round_1}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winRound === 2 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:sirka/2.5,marginTop:-80,}} onPress={round_2}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity activeOpacity= {1} style={{borderWidth:4,borderColor: winRound === 3 ? 'orange' : 'rgba(0,0,0,0.2)',alignItems:'center',justifyContent:'center',width:80,height:80,backgroundColor:'#fff',borderRadius:50,left:(sirka/6)*4,marginTop:-80,}} onPress={round_3}><Text>3</Text></TouchableOpacity>
        <Text style={{paddingTop:1}}></Text>
        <Text style={styles.cara}></Text>
       
        <Text style={{color:'#fff', fontSize:18, textAlign:'center'}}>Vsazeno</Text>
        <Text style={{alignSelf:'center',marginTop:0}}></Text>
        <Text style={{color:'#fff',left:sirka/12}}>0xp</Text>
   <Slider style={{width:250, alignSelf:'center',marginTop:-30}} value={seekbarValue} minimumValue={0} maximumValue={100} step={10} onValueChange={(value) => {setSeekbarValue(value);}}/>
        <Text style={{color:'#fff',left:((sirka/6)*5)+15,marginTop:-29}}>100xp</Text>
        <Text style={{paddingTop:1}}></Text>
        <Text style={styles.cara}></Text>
        <Text style={{color:'#fff'}}>Vsazeno: {seekbarValue}</Text>
        <Text style={{textAlign:'right',color:'#fff',}}>Možná výhra: {kurz*seekbarValue}</Text>
        <Text style={{color:'#fff'}}>Kurz: {kurz}</Text>
        <ScrollView><View>
         
         </View></ScrollView>
        <Text style={styles.cara}></Text>        
       <View style={{alignSelf:'center'}}>      
       <Text>
       <TouchableOpacity activeOpacity= {1} onPress={pressHandler1} style={{backgroundColor:'#000', height:50, width:sirka/3,right:sirka/3,activeOpacity: 0,}}><Text style={{color:'yellow',textAlign:'center', padding:15}}>Turnaje</Text></TouchableOpacity>
       <TouchableOpacity activeOpacity= {1} onPress={pressHandler2} style={{backgroundColor:'#000', height:50, width:sirka/3,activeOpacity: 0,}}><Text style={{color:'yellow',textAlign:'center',padding:15}}>Profil</Text></TouchableOpacity>
       <TouchableOpacity activeOpacity= {1} onPress={pressHandler3} style={{backgroundColor:'#000', height:50, width:sirka/3, left:sirka/3,activeOpacity: 0,}}><Text style={{color:'yellow',textAlign:'center',padding:15}}>Žebříčky</Text></TouchableOpacity>
       </Text>   
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
    },
    cara: {
        left:0,
        right:0,
        backgroundColor:'#777',
        height:1, 
      },
      nadpis: {
        fontSize:26,
        color:'#fff',
        textAlign:'center',
        alignItems: 'center',
      },
});