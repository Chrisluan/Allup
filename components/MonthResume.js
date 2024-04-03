import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { HomeStyles } from '../styles/HomeStyles'
import { AntDesign } from '@expo/vector-icons';

export default function MonthResume({userID}) {
  const [historyData, setHistoryData] = useState([]);
  useEffect(()=>{
    async function fetchHistory() {
      let request = await fetch(`http://192.168.0.2:9900/paymenthistory/${userID}`, {
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      });
      let response = await request.json();
      console.log(await response) 
      console.log(await response[0].monthValue);
      setHistoryData(response);
    }
    fetchHistory();
  }, []);
  
    
  return (
    <View style={HomeStyles.monthResume.contentHolder}>
      <View style={HomeStyles.monthResume.textContainer}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>
          TOTAL DO MÊS:
        </Text>
        <Text style={{fontSize:40, fontWeight:'800',color:'#0081FA'}}>
          {historyData[0] != null || historyData[0] != undefined ? "R$ "+(historyData[0].fix + historyData[0].flex) : "Loading..."}
        </Text>
        <View style={HomeStyles.monthResume.flexfix}>
          <View>
            <Text>
              Fixas <AntDesign name="questioncircleo" size={13} color="black" />
            </Text>
            <Text style={HomeStyles.monthResume.flexfix.values}>
            {historyData[0] != null || historyData[0] != undefined ? "R$ "+historyData[0].fix : "Loading..."}
            </Text>
          </View>
          <View>
            <Text > 
              Flexível <AntDesign name="questioncircleo" size={13} color="black" />
            </Text>
            <Text style={HomeStyles.monthResume.flexfix.values}>
            {historyData[0] != null || historyData[0] != undefined ? "R$ "+historyData[0].flex : "Loading..."}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
