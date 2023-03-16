import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function StationnementTemp(props) {
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
    <View  style={{flex:0.19}}>
     <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
   </View>
   <View style={{flex:1}}>
     <View>
         <Text style={{color:'#ffff',fontWeight:'bold',left:20,fontSize:24,marginBottom:20}}>Listes des parking</Text>
         <TextInput placeholder='Recherche un parking ' style={{borderWidth:1.5,borderColor:'#ffff',borderRadius:8,width:350,alignSelf:"center"}} />
     </View>
     <View style={{flex:1,marginTop:40}}>
     <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:80,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}} onPress={()=>props.navigation.push("pageRs")}>
         
         <Text style={{color:"#303840",fontWeight:"bold"}}>papa</Text>
         <View style={{display:"flex",borderWidth:1,width:"50%",flexDirection:"row",justifyContent:"space-between"}}>
         <Text style={{color:"#303840",fontWeight:"bold"}}>papa</Text>
         <Text style={{color:"#303840",fontWeight:"bold"}}>papa</Text>
         </View>
     </TouchableOpacity>
     <TouchableOpacity>

     </TouchableOpacity>
     </View>
   </View>
 </View>
  )
}