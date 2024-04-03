import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Enter } from '../styles/Enter.js';
import { useNavigation } from '@react-navigation/native';
import {TextInput, Pressable, Text, View } from 'react-native';

export default function Identify() {
  const navigation = useNavigation();
  const [_email, setEmail] = useState("");
  const [_pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function LogIn(){
    let request = await fetch(`http://192.168.0.3:9900/checkAccount?email=${_email}&password=${_pass}`, {
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    });

    let response = await request.json();
    if (response.error || response == null) {
      setError("Invalid email or password"); // Set the error message
    } else {
      navigation.navigate("Home", { userData: response });
    }
  }

  return (
    <View style={Enter.body} animation={"bounceInDown"}>
      <View style={Enter.generalContainer}>
        <View style={Enter.loginContainer}>
          <View style={{display:'flex', gap:20, alignItems:'center'}}>
            <Text style={Enter.logo}>ALLUP</Text>
            <Text style={Enter.text}>Log-in to get better!</Text>
          </View>
          <View style={{width:'80%'}}>
            <Text style={{color:'#235789', marginVertical:6}}>Email:</Text>
            <TextInput
              autoComplete='email'
              placeholder='example@email.com'
              style={Enter.textInput}
              onChangeText={(text) => {setEmail(text); setError(null);}}
            />
            <Text style={{color:'#235789', marginVertical:6}}>Password:</Text>
            <TextInput 
              secureTextEntry={true} 
              placeholder='Your password' 
              style={Enter.textInput}
              onChangeText={(text) => {setPass(text); setError(null);}}
            />
          </View>
          
          
          <View style={{display:'flex', justifyContent:'center',width:'80%', flexDirection:'row', gap:20}}>
            <Pressable onPress={LogIn} style={Enter.buttons}><Text style={{color:'#235789'}}>Login</Text></Pressable>
            
          </View>
          {error && <Text style={{color: 'red', textAlign: 'center', marginVertical: 10}}>{error}</Text>}

          <Text style={{display:'flex',textAlign:'center', alignItems:'center'}}>
            Still do not have an account? <Pressable style={{height:'0'}} onPress={() => navigation.navigate("Register")}>
              <Text style={{color: 'blue'}}>Click here</Text>
            </Pressable> to register.
          </Text>
        </View>
      </View>
      <Text style={{textAlign:'center'}}>© Copyright - All rights reserved to Chris & Allup</Text>
    </View>
  );
}