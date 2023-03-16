import { View, Text, TouchableOpacity,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'react-native-axios'
const Acceuil = (props) => {
  const [nom,setNom]=useState('')
 
      return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
      <View  style={{flex:0.19,marginTop:10}}>
        <Text style={{color:"#ffff", fontWeight:"bold"}}>ds</Text>
      </View>
      <View style={{flex:0.5,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
        <View>
       <TouchableOpacity style={{borderWidth:1,width:100,borderColor:"green",height:100,borderRadius:10}} onPress={()=>props.navigation.push("Parking")} >

       </TouchableOpacity>
        <Text style={{textAlign:"center",marginTop:10,fontWeight:"bold",color:"#ffff"}}>Parking</Text>
        </View>
        <View>
       <TouchableOpacity style={{borderWidth:1,width:100,borderColor:"#ffff",height:100,borderRadius:10}} onPress={()=>props.navigation.push("station")} >

       </TouchableOpacity>
       <Text style={{width:100,textAlign:"center",marginBottom:-5,top:10,fontWeight:"bold",color:"#ffff",}}>Stationnement Temporelle</Text>

        </View>
      </View>
    </View>
  )
}

export default Acceuil