import { View, Text, TouchableOpacity,  } from 'react-native'
import React from 'react'

const Acceuil = () => {
  return (
    <View style={{flex:1}}>
      <View  style={{flex:0.19}}>
        <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
      </View>
      <View style={{flex:0.5,borderWidth:1,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
        <View>
       <TouchableOpacity style={{borderWidth:1,width:100,borderColor:"green",height:100,borderRadius:10}} >

       </TouchableOpacity>
        <Text style={{textAlign:"center",marginTop:10,fontWeight:"bold",color:"#ffff"}}>Parking</Text>
        </View>
        <View>
       <TouchableOpacity style={{borderWidth:1,width:100,borderColor:"#ffff",height:100,borderRadius:10}} >

       </TouchableOpacity>
       <Text style={{width:100,textAlign:"center",marginBottom:-5,top:10,fontWeight:"bold",color:"#ffff",}}>Stationnement Temporelle</Text>

        </View>
      </View>
    </View>
  )
}

export default Acceuil