import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PageRsv = (props) => {
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
        <View  style={{flex:0.5}}>
        <Text style={{color:"#ffff", fontWeight:"bold"}}>Yann</Text>
      </View>
      <View style={{justifyContent:"center"}}>
        <View style={{width:"90%",borderWidth:1,borderColor:"#ffff",alignSelf:'center',height:"80%",borderRadius:10,backgroundColor:"#D9D9D9",elevation:10,display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"space-around"}}>
          <View style={{borderWidth:1,width:"40%",height:"30%"}}>

          </View>
          <View>
            <Text style={{fontWeight:"bold",right:50,color:"black",marginTop:20}}>Nom Du Parking: {props.route.params.Nom}</Text>
            <Text style={{fontWeight:"bold",left:120,color:"black"}}>Tarif: 5000f/Heurs</Text>
            <Text style={{fontWeight:"bold",right:50,color:"black",marginTop:20}}>Lieu Du Parking : {props.route.params.Emplacement}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:"#303840",width:"25%",height:"5%",borderRadius:7}} onPress={()=>props.navigation.push("Viewchoose")}>
            <Text  style={{color:"#72A603",alignSelf:"center"}}>Reserver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PageRsv