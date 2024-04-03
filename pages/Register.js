import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Enter } from '../styles/Enter.js';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TextInput, Pressable, Text, View } from 'react-native';
export default function Register() {
  const navigation = useNavigation();

  const [_email, setEmail] = useState("");
  const [_pass, setPass] = useState("");
  const [_userName, setName] = useState("");
  const [error, setIsRegistered] = useState(null);
  const [_passView, setViewPass] = useState(false);

  
  async function CheckAccount() {
    let response = await fetch(`http://192.168.0.3:9900/checkRegister?email=${_email}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    let data = await response.json();
    const _isRegistered = await data.error ? true : false;
    setIsRegistered(_isRegistered ? null : 'User Already Registered')
    return await _isRegistered;
  }
  
  async function Register() {
    if (await CheckAccount()) {
      let request = await fetch('http://192.168.0.3:9900/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: _email,
          password: _pass,
          userName: _userName
        })
      });
      navigation.navigate("Identify");
    }
    
  }
  return (
    <View style={Enter.body}>
        <View style={Enter.generalContainer}>
              <View style={Enter.loginContainer}>
              <View style={{display:'flex', gap:20, alignItems:'center'}}>
            <Text style={Enter.logo}>
                ALLUP
            </Text>
              <Text style={Enter.text}>
                  Register
              </Text>
            </View>
              <View style={{width:'80%'}}>
              <Text style={{color:'#235789', marginVertical:6}}>
                Name:
              </Text>
                  <TextInput
                  autoComplete='username'
                  placeholder='Example: John Jordan' 
                  style={Enter.textInput}
                  onChangeText={(text) => setName(text)}
                  />
              <Text style={{color:'#235789', marginVertical:6}}>
                Email:
              </Text>
                  <TextInput
                  autoComplete='email'
                  placeholder='example@email.com' 
                  style={Enter.textInput}
                  onChangeText={(text) => setEmail(text)}
                  />
              <Text style={{color:'#235789', marginVertical:6}}>
                Password:
              </Text>
                  <TextInput 
                  autoComplete='new-password'
                  secureTextEntry={_passView} 
                  placeholder='Your password' 
                  style={Enter.textInput}
                  onChangeText={(text) => setPass(text)}
                  />
                  <Pressable onPress={() => setViewPass(!_passView)}>
                    <Text>{_passView ? 'Show' : 'Hide'}</Text>
                  </Pressable>
              </View>
              
              <View style={{display:'flex', justifyContent:'center',width:'80%', flexDirection:'row', gap:20}}>
                  <Pressable onPress={Register} style={Enter.buttons}><Text style={{color:'#235789'}}>Register</Text></Pressable>
              </View>
              {error && <Text style={{color: 'red', textAlign: 'center', marginVertical: 10}}>{error}</Text>}
              <Text style={{textAlign:'center', maxWidth:'20ch'}}>
                  Do you already own an account? <Pressable style={{height:'0'}} onPress={() => navigation.navigate("Identify")}>
        <Text style={{color: 'blue'}}> Click here</Text>
    </Pressable> to LogIn.
                </Text>
              </View>

        </View>
      <Text style={{textAlign:'center'}}>© Copyright - All rights reserved to Chris & Allup</Text>
    </View>
  );
  }
  