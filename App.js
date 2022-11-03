import React, {useState} from 'react';
import * as Font from 'expo-font';
import {Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import homeStack from './routes/homeStack';
import Navigator from './routes/homeStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';


export default function App() {

  return (
    <Navigator headerMode='none'/>
  );
  
}

