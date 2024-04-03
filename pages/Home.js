import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar.js'
import { HomeStyles } from '../styles/HomeStyles'
import { Colors } from '../styles/Colors.js'
import { AntDesign } from '@expo/vector-icons';
import MonthResume from '../components/MonthResume.js'
export default function Home({route}) {
  const { userData } = route.params;
  
  return (
    
    <View style={{display:'flex', alignItems:'center', gap:20}}>
      <StatusBar backgroundColor={Colors.primary.base}></StatusBar>
      <NavBar UserName={userData.userName}/>
     
      <MonthResume userData={userData.id}/>
    </View>
  )
}