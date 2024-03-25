import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Button, Pressable, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.body}>
    <View style={styles.generalContainer}>
          <View style={styles.loginContainer}>
          <View style={{display:'flex', gap:20, alignItems:'center'}}>
      <Text style={styles.logo}>
          Nodues
        </Text>
          <Text style={styles.text}>
              Log-in or create an account
          </Text>
         </View>
          <View style={{width:'80%'}}>
          <Text style={{color:'#235789', marginVertical:6}}>
            Email:
          </Text>
              <TextInput style={styles.textInput}/>
          <Text style={{color:'#235789', marginVertical:6}}>
            Password:
          </Text>
              <TextInput style={styles.textInput}/>
          </View>
          
          <View style={{display:'flex', justifyContent:'center',width:'80%', flexDirection:'row', gap:20}}>
            <Pressable style={styles.buttons}><Text style={{color:'#235789'}}>Login</Text></Pressable>
            <Pressable color={'#161925'} style={styles.buttons}><Text style={{color:'#235789',}}>Register</Text></Pressable>
          </View>
          </View>

    </View>
      <Text style={{textAlign:'center'}}>Copyright © - All rights reserved to Chris & Nodues</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  body:{
    gap:20,
    color:'white',
    paddingHorizontal:40,
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  generalContainer:{
    gap:30,
    display:'flex',
    alignItems:'center',
    width:300,
  },
  logo: {
    fontWeight:'bold',
    fontSize:60,
  }, 
  text:{
    fontSize:20,
    
  },
  buttons:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width:'45%',
    elevation: 0,
    backgroundColor: '#FDFFFC',
    borderWidth:1,
    borderColor:'#235789',
  },
  textInput:{
    padding:5,
    paddingHorizontal:15,
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#235789',
    color:'#235789'
  },
  loginContainer:{
    borderWidth:2,
    borderColor:'#235789',
    gap:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'fit-content',
    paddingVertical:40,
    backgroundColor:'#fdfffc',
  }
});
