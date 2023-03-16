import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'react-native-axios'
import openMap from 'react-native-open-maps';
export default function ViewReceipt(props) {
 const _goToYosemite=()=> {
    openMap({ latitude: 37.865101, longitude: -119.538330 });
  }
  const [nom,setNom]=useState('')
  const [emplacement,setEmplacement]=useState('')
  const [code,setCode]=useState('')
  useEffect(()=>{
    axios.post("http://10.0.2.2:80/request/getInfoReservation.php")
    .then(res =>{
      console.log(res.data.resultat)
      setCode(res.data.resultat.code_acces)
      setNom(res.data.resultat.nom_parking)
      setEmplacement(res.data.resultat.emplacement)
    }).catch(e=>{
      console.log(e)
    })
  })
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
   
  <View style={{justifyContent:"center",marginTop:100}}>
    <View style={{width:"90%",alignSelf:'center',height:"80%",borderRadius:10,backgroundColor:"#D9D9D9",elevation:10,display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"space-around"}}>
     <Text style={{fontSize:35,fontWeight:"bold",color:"black"}}>Bien effectué</Text>
      <View style={{Bottom:20}}>
        <Text style={{fontWeight:"bold",right:50,color:"black"}}>Nom Du Parking : {nom}</Text>
        <Text style={{fontWeight:"bold",left:100,color:"black"}}>Tarif: 1000f/Heurs</Text>
        <Text style={{fontWeight:"bold",right:50,color:"black"}}>Lieu Du Parking : {emplacement}</Text>
        <View style={{alignItems:"center",top:30}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:"black"}}>Code d'entré</Text>
            <Text style={{fontWeight:'bold',fontSize:50,color:"#72A603"}}>{code}</Text>
        </View>
      </View>
      <View style={{width:"80%",height:"20%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity style={{backgroundColor:"#303840",width:"35%",height:"22%",borderRadius:7}} onPress={()=>_goToYosemite()}>
        <Text  style={{color:"#72A603",alignSelf:"center"}}>Localisation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#303840",width:"35%",height:"22%",borderRadius:7,left:15}} onPress={()=>props.navigation.push("Viewchoose")}>
        <Text  style={{color:"#72A603",alignSelf:"center"}}>Prolonger</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  </View>
</View>
  )
}