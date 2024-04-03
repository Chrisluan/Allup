import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import Identify from '../pages/Identify';
import Register from '../pages/Register'
const Stack = createNativeStackNavigator();
 
export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Identify" options={{headerShown:false}} component={Identify}/>
            <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
            <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
        </Stack.Navigator>
    )
}