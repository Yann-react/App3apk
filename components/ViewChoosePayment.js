import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ViewChoosePayment(props) {
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
 
      <View style={{flex:1}}>
        
        <View style={{flex:1,marginTop:80}}>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}} onPress={()=>props.navigation.push("conf")}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Wave</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}} onPress={()=>props.navigation.push("conf")}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Orange Money</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}} onPress={()=>props.navigation.push("conf")}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Moov Money</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
       
        </View>
      </View>
    </View>
  )
}