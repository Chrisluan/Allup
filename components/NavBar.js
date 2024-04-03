import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeStyles } from '../styles/HomeStyles'
const NavBar = ({UserName}) => {
  return (
    <View style={HomeStyles.navBar.navBack}>
        <View style={HomeStyles.navBar.content}>
            <AntDesign name="menu-fold" size={30} color="white" />
            <Text style={HomeStyles.navBar.welcome}>Olá, {UserName}</Text>
            <MaterialIcons name="person" size={35} color="white" />
        </View>
    </View>
  )
}
export default NavBar;