import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ViewReceipt() {
  return (
    <View style={{flex:1}}>
    <View  style={{flex:0.5}}>
    <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
  </View>
  <View style={{justifyContent:"center"}}>
    <View style={{width:"90%",alignSelf:'center',height:"80%",borderRadius:10,backgroundColor:"#D9D9D9",elevation:10,display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"space-around"}}>
     <Text style={{fontSize:35,fontWeight:"bold",color:"black"}}>Bien effectué</Text>
      <View style={{Bottom:20}}>
        <Text style={{fontWeight:"bold",right:80,color:"black"}}>Nom Du Parking</Text>
        <Text style={{fontWeight:"bold",left:100,color:"black"}}>Tarif: 5000f/Heurs</Text>
        <Text style={{fontWeight:"bold",right:80,color:"black"}}>Lieu Du Parking</Text>
        <View style={{alignItems:"center",top:30}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:"black"}}>Code d'entré</Text>
            <Text style={{fontWeight:'bold',fontSize:50,color:"#72A603"}}>55223</Text>
        </View>
      </View>
      <View style={{width:"80%",height:"20%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity style={{backgroundColor:"#303840",width:"35%",height:"22%",borderRadius:7}}>
        <Text  style={{color:"#72A603",alignSelf:"center"}}>Localisation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#303840",width:"35%",height:"22%",borderRadius:7,left:15}}>
        <Text  style={{color:"#72A603",alignSelf:"center"}}>Prolonger</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  </View>
</View>
  )
}