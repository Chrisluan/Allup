import {StyleSheet} from 'react-native';
import { Colors } from './Colors';
export const HomeStyles = StyleSheet.create({
    navBar: {
        navBack:{
            display:'flex',
            alignItems:'center',
            width:'100%',
            borderBottomRightRadius:50,
            borderBottomLeftRadius:50,
            height:90,
            backgroundColor:'#0081FA',
        },
        content:{
            width:'85%',
            marginTop:35,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        },
        welcome:{
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            fontSize:25,
        },
    },
    monthResume: {
        contentHolder:{
            height:'fit-content',
            width:'90%',
            borderRadius:30,
            backgroundColor:Colors.primary[20],
            padding: 30,
            justifyContent:'center',
        },
        textContainer:{
            display:'flex',
        },
        flexfix:{
            display:'flex',
            flexDirection:'row',
            gap:15,
            fontWeight:'bold',
            values:{
                fontWeight:'bold',
            }
        },
        
    },
    history:{

    }
    
  });
  