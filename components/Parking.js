import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'react-native-axios'

const Parking = (props) => {
  const [emplacement,setEmplacement]=useState('')
  const [nom,setNom]=useState('')
  const [data,setData]=useState([])
  useEffect(()=>{
    // setNom(props.route.params.nom)
    axios.post("http://10.0.2.2:80/request/listeParking.php")
    .then(res =>{
      console.log("response",res.data.resultat)
      setEmplacement(res.data.resultat.emplacement)
      setNom(res.data.resultat.nom_parking)
      setData(res.data.resultat)
      // props.navigation.push("Acceuil",
      // {nom:nomComplet}
      // )
      console.log(data)
     }).catch(error=>{
      console.log("erreur",error)
     })
    },[])
    function display (){
      return data.map((item)=>{
      return (
        <Text>
          {item.emplacement}
        </Text>
      )
      })
    }
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
       
      <View style={{flex:1,marginTop:40}}>
        <View>
            <Text style={{color:'#ffff',fontWeight:'bold',left:20,fontSize:24,marginBottom:20}}>Listes des parking</Text>
            <TextInput placeholder='Recherche un parking ' style={{borderWidth:1.5,borderColor:'#ffff',borderRadius:8,width:350,alignSelf:"center"}} />
        </View>
        <View style={{flex:1,marginTop:40}}>
        <TouchableOpacity style={{width:"95%",alignSelf:"center",marginTop:20,height:80,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#D9D9D9"}} onPress={()=>props.navigation.push("PageRsv",{Emplacement:emplacement,Nom:nom})}>
            
            <Text style={{color:"#303840",fontWeight:"bold",marginLeft:10}}>Nom: {nom}</Text>
            <View style={{display:"flex",width:"80%",flexDirection:"row",justifyContent:"space-between",marginTop:10,marginLeft:10}}>
            <Text style={{color:"#303840",fontWeight:"bold"}}>Lieu: {emplacement}</Text>
            <Text style={{color:"#303840",fontWeight:"bold"}}>Prix: 500/heur</Text>
            </View>
            {/* {display()} */}
        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Parking