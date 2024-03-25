import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Button, Pressable, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.body}>
    <View style={styles.generalContainer}>
    <View style={{display:'flex', gap:20, alignItems:'center'}}>
      <Text style={styles.logo}>
          Nodues
        </Text>
          <Text style={styles.text}>
              Log-in or create an account
          </Text>
         </View>
        
          <View style={styles.loginContainer}>
          <View style={{width:'80%'}}>
          <Text style={{color:'white', marginVertical:6}}>
            Email:
          </Text>
              <TextInput style={styles.textInput}/>
          <Text style={{color:'white', marginVertical:6}}>
            Password:
          </Text>
              <TextInput style={styles.textInput}/>
          </View>
          
          <View style={{display:'flex', justifyContent:'center',width:'80%', flexDirection:'row', gap:20}}>
            <Pressable style={styles.buttons}><Text style={{color:'white'}}>Login</Text></Pressable>
            <Pressable color={'#161925'} style={styles.buttons}><Text style={{color:'white'}}>Register</Text></Pressable>
          </View>
          </View>

    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  body:{
    color:'white',
    paddingHorizontal:40,
    width:'100%',
    height:'100%',
    background: 'background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  generalContainer:{
    gap:30,
    display:'flex',
    alignItems:'center',
    width:'100%',
  },
  logo: {
    fontWeight:'bold',
    fontSize:34,
  }, 
  text:{
    fontSize:24,
  },
  buttons:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width:'45%',
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'black',
  },
  textInput:{
    padding:5,
    paddingHorizontal:15,
    width:'100%',
    height:40,
    borderRadius:5,
    backgroundColor:'white',
  },
  loginContainer:{
    borderRadius:20,
    gap:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'fit-content',
    paddingVertical:40,
    backgroundColor:'#235789',
  }
});
