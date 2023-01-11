import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ConfirmReservation() {
  return (
    <View style={{flex:1}}>
    <View  style={{flex:0.5}}>
    <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
  </View>
  <View style={{flex:3,display:"flex",flexDirection:"column",alignItems:"center"}}>
    <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Text style={{fontWeight:"bold", color:"#ffff"}}>Numero à debiter</Text>
    <Text style={{fontWeight:"bold", color:"#ffff",marginTop:20}}>0102030146</Text>
    </View>
    <Text style={{fontWeight:"bold", color:"#ffff",fontSize:35,marginTop:200}}>
        10 000 FCFA
    </Text>
  </View>
  <View style={{flex:1,display:"flex",flexDirection:"column"}}>
<View style={{marginLeft:17}}>
    <Text style={{fontWeight:"bold", color:"#ffff"}}>Frais opérateur</Text>
</View>
<View style={{marginLeft:17}}>
    <Text style={{fontWeight:"bold", color:"#ffff",marginTop:10,color:"#72A603"}}>Montant a envoyé</Text>
</View>
<TouchableOpacity style={{backgroundColor:"#72A603",marginTop:50,width:"95%",alignSelf:"center",height:"25%",justifyContent:"center",borderRadius:15}}>
    <Text style={{alignSelf:"center",fontWeight:"bold"}}>ENVOYER</Text>
</TouchableOpacity>
  </View>
    </View>
  )
}