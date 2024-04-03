import {StyleSheet} from 'react-native';
import {Colors} from './Colors';
export const Enter = StyleSheet.create({
    body:{
      gap:30,
      color:'white',
      paddingHorizontal:20,
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:Colors.primary[50]
    },
    generalContainer:{
      gap:30,
      display:'flex',
      alignItems:'center',
      width:300,
    },
    logo: {
      fontWeight:'bold',
      fontSize:65,
    }, 
    text:{
      fontSize:20,
  
    },
    buttons:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width:'100%',
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
      borderColor:Colors.primary[20],
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
  