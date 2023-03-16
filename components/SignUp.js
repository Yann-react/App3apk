import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React , {useState} from 'react'
import axios from 'react-native-axios'
export default function SignUp(props) {
  const [nomComplet,setNomComplet]=useState('')
  const [numero,setNumero]=useState('')
  const [password,setPassword]=useState('')

  const SignUp =() =>{
    axios.post("http://10.0.2.2:80/request/client.php/?nom_prenom="+nomComplet+"&tel="+numero+"&mdp="+password).then(res =>{
    console.log("response",res.data)
    props.navigation.push("Acceuil",
    {nom:nomComplet}
    )
   }).catch(error=>{
    console.log("erreur",error)
   })
  }
  return (
      
      <View style={{flex:1, backgroundColor:"#303840"}}>
        <ScrollView>
      <View style={{flex:0.1,alignSelf:"center",marginTop:20,justifyContent:"space-around",alignItems:"center"}}>
        <Text >Logo</Text>
        <Text style={{color:"#ffff",fontSize:18}}>Créer un compte</Text>
      </View>
      <View style={{flex:2,marginTop:100,justifyContent:"space-around"}}>
        <TextInput placeholder='Nom complet' onChangeText={nomComplet=>setNomComplet(nomComplet)} value={nomComplet} style={{borderWidth:1 , width:"94%" ,alignSelf:"center",borderRadius:7,borderColor:"#D9D9D9", color:"#D9D9D9"}} placeholderTextColor="#D9D9D9"  />
        <TextInput placeholder='Numero' onChangeText={numero=>setNumero(numero)} value={numero} style={{borderWidth:1 , width:"94%" ,alignSelf:"center",borderRadius:7,borderColor:"#D9D9D9", color:"#D9D9D9",marginTop:40}} placeholderTextColor="#D9D9D9" />
        <TextInput placeholder='Mot de passe' secureTextEntry={true} onChangeText={password=>setPassword(password)} value={password} style={{borderWidth:1 , width:"94%" ,alignSelf:"center",borderRadius:7,borderColor:"#D9D9D9", color:"#D9D9D9",marginTop:40}} placeholderTextColor="#D9D9D9" />
        <View style={{alignItems:"center",marginTop:20}}>
        <TouchableOpacity style={{width:"94%",height:"33%",alignItems:"center",justifyContent:"center",backgroundColor:"#72A603",marginTop:40}} onPress={()=>SignUp()}>
            <Text style={{color:"#303840    ",fontWeight:"bold"}}>S'ENREGISTRER</Text>
        </TouchableOpacity>
        <Text style={{color:"#D9D9D9",marginTop:10}}>Vous avez deja un compte? <Text style={{color:"#72A603",fontWeight:"bold"}} onPress={()=>props.navigation.push("Login")}>Se Connecter</Text></Text>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}