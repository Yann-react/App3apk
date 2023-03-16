import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function Login(props) {
  return (
    <View style={{flex:1, backgroundColor:"#303840"}}>
    <ScrollView>
  <View style={{flex:0.1,alignSelf:"center",marginTop:120,justifyContent:"space-around",alignItems:"center"}}>
    <Text >Logo</Text>
    <Text style={{color:"#ffff",fontSize:30}}>Bienvenue</Text>
  </View>
  <View style={{flex:2,marginTop:100,justifyContent:"space-around"}}>
    <TextInput placeholder='Numero' style={{borderWidth:1 , width:"94%" ,alignSelf:"center",borderRadius:7,borderColor:"#D9D9D9", color:"#D9D9D9",marginTop:40}} placeholderTextColor="#D9D9D9" />
    <TextInput placeholder='Mot de passe' style={{borderWidth:1 , width:"94%" ,alignSelf:"center",borderRadius:7,borderColor:"#D9D9D9", color:"#D9D9D9",marginTop:40}} placeholderTextColor="#D9D9D9" />
    <View style={{alignItems:"center",marginTop:20}}>
    <TouchableOpacity style={{width:"94%",height:"33%",alignItems:"center",justifyContent:"center",backgroundColor:"#72A603",marginTop:40}} onPress={()=>props.navigation.push("Acceuil")}>
        <Text style={{color:"#303840    ",fontWeight:"bold"}}>SE CONNECTER</Text>
    </TouchableOpacity>
    <Text style={{color:"#D9D9D9",marginTop:10}}>Vous n'avez pas un compte? <Text style={{color:"#72A603",fontWeight:"bold"}} onPress={()=>props.navigation.push("SignUp")}>S'Inscrire</Text></Text>
    </View>
  </View>
</ScrollView>
</View>
  )
}