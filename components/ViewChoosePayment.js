import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ViewChoosePayment() {
  return (
    <View style={{flex:1}}>
       <View  style={{flex:0.19}}>
        <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
      </View>
      <View style={{flex:1}}>
        
        <View style={{flex:1,marginTop:80}}>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Wave</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Orange Money</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:90,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}}>
            
            <Text style={{color:"#303840",fontWeight:"bold"}}>Moov Money</Text>
            <Text style={{color:"#303840",fontWeight:"bold",marginTop:20}}>1%-Frais opérateur</Text>
           
        </TouchableOpacity>
       
        </View>
      </View>
    </View>
  )
}