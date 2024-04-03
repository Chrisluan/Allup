import {StyleSheet} from 'react-native';
export const Enter = StyleSheet.create({
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
      fontSize:50,
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
  