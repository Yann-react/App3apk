import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'react-native-axios'

export default function ConfirmReservation(props) {
  const [montant,setMontant]=useState('')
  const [montantFrais,setMontantFrais]=useState('')
  const [mode,setMode]=useState('')
  const [code,setCode]=useState('')
  const random = () => {
    const nbre = parseInt(Math.random() * 1000000);
    if (nbre.lenght < 6) {
      nbre = parseInt(Math.random() * 1000000);
    }
    setCode(nbre);
    console.log(code)
  };
  // setMontantFrais(parseInt(montant)+parseInt(montant*0.01))

 useEffect(()=>{
//   axios.post("http://10.0.2.2:80/request/addPaiement.php/?nom_prenom="+nomComplet+"&tel="+numero+"&mdp="+password).then(res =>{
//     console.log("response",res.data)
//    }).catch(error=>{
//     console.log("erreur",error)
//    })
dd()
random()


 },[2])
 const current = new Date();
 const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
//  console.log(date)
 const dd = () =>{
  const p = parseInt(montant) + parseInt(montant)*0.01
  setMontantFrais(p)
  setMode("wave")
  console.log(montantFrais)
 }
 const nbre = 1
 const nbres = 1
const send=()=>{
  axios.post("http://10.0.2.2:80/request/addPaiement.php/?moy_paiement="+mode+"&montant="+montantFrais+"&date_paiement="+date+"&id_client="+nbre+"&id_gest="+nbres).then(res =>{
        console.log("response",res.data)
        // props.navigation.push("ViewReceipt")
       }).catch(error=>{
        console.log("erreur",error)
       })
     axios.post("http://10.0.2.2:80/request/addReservation.php/?date_debut="+date+"&date_fin="+date+"&prix_unitaire="+montant+"&id_client="+nbre+"&id_park="+nbres+"&code_acces="+code)
    .then((res)=>{
      console.log("response for reservation",res)
    })
    .catch(e=>{
      console.log("error for reservation ",e)
    })
}
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
 
  <View style={{flex:3,display:"flex",flexDirection:"column",alignItems:"center"}}>
    <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Text style={{fontWeight:"bold", color:"#ffff"}}>Numero à debiter</Text>
    <Text style={{fontWeight:"bold", color:"#ffff",marginTop:20}}>0102030146</Text>
    </View>
    <TextInput onChangeText={montant=>setMontant(montant)} value={montant} style={{fontWeight:"bold",borderBottomWidth:1,borderColor:"#72A603", color:"#ffff",fontSize:35,marginTop:200}}/>
    
  </View>
  <View style={{flex:1,display:"flex",flexDirection:"column"}}>
<View style={{marginLeft:17}}>
    <Text style={{fontWeight:"bold", color:"#ffff"}}>Frais opérateur {parseInt(montant*0.01)}</Text>
</View>
<View style={{marginLeft:17}}>
    <Text style={{fontWeight:"bold", color:"#ffff",marginTop:10,color:"#72A603"}}>Montant a envoyé {parseInt(montant)+parseInt(montant*0.01)}</Text>
</View>
<TouchableOpacity style={{backgroundColor:"#72A603",marginTop:50,width:"95%",alignSelf:"center",height:"25%",justifyContent:"center",borderRadius:15}} onPress={()=>send()}>
    <Text style={{alignSelf:"center",fontWeight:"bold"}}>ENVOYER</Text>
</TouchableOpacity>
  </View>
    </View>
  )
}