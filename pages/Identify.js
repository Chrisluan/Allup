import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { styles } from '../styles/styles.js';
import {TextInput, Pressable, Text, View } from 'react-native';
export default function Identify() {

  const [_email, setEmail] = useState("");
  const [_pass, setPass] = useState("");


  async function checkAccount(){
    console.log("Botão pressionado!")
    let request = await fetch('http://192.168.0.4:9900/create', {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: _email,
        password: _pass
      })
    })
  }

  return (
    <View style={styles.body}>
        <View style={styles.generalContainer}>
              <View style={styles.loginContainer}>
              <View style={{display:'flex', gap:20, alignItems:'center'}}>
            <Text style={styles.logo}>
                ALLUP
            </Text>
              <Text style={styles.text}>
                  Log-in to get better!
              </Text>
            </View>
              <View style={{width:'80%'}}>
              <Text style={{color:'#235789', marginVertical:6}}>
                Email:
              </Text>
                  <TextInput
                  placeholder='example@email.com' 
                  style={styles.textInput}
                  onChangeText={(text) => setEmail(text)}
                  />
              <Text style={{color:'#235789', marginVertical:6}}>
                Password:
              </Text>
                  <TextInput 
                  secureTextEntry={true} 
                  placeholder='Your password' 
                  style={styles.textInput}
                  onChangeText={(text) => setPass(text)}

                  />
              </View>
              
              <View style={{display:'flex', justifyContent:'center',width:'80%', flexDirection:'row', gap:20}}>
                  <Pressable onPress={checkAccount} style={styles.buttons}><Text style={{color:'#235789'}}>Login</Text></Pressable>
              </View>
              <Text style={{textAlign:'center'}}>
                  Still do not have an account? Click here to register.
                </Text>
              </View>

        </View>
      <Text style={{textAlign:'center'}}>© Copyright - All rights reserved to Chris & Allup</Text>
    </View>
  );
}