import { View, Text } from 'react-native'
import React from 'react'
import Acceuil from './components/Acceuil'
import Parking from './components/Parking'
import PageRsv from './components/PageRsv'
import ViewChoosePayment from './components/ViewChoosePayment'
import ViewReceipt from './components/ViewReceipt'
import ConfirmReservation from './components/ConfirmReservation'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationnementTemp from './components/StationnementTemp'
import PageRsvStationnement from './components/PageRsvStationnement'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
      {/* <NavigationContainer>
        <Navigator>
        <Screen
               name="Login"
               component={Login}
               options={{ headerShown:false}}
             />
        <Screen
               name="SignUp"
               component={SignUp}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:"Inscription"
                };
              }}             />
        <Screen
               name="Acceuil"
               component={Acceuil}
               options={{ headerShown:false}}

             />
        <Screen
               name="PageRsv"
               component={PageRsv}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:"Reservation"
                };
              }} 
             />
        <Screen
               name="Parking"
               component={Parking}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                };
              }}  
               
             />
        <Screen
               name="Viewchoose"
               component={ViewChoosePayment}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:"Depot"
                };
              }} 
             />
        <Screen
               name="ViewReceipt"
               component={ViewReceipt}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:"Reçu"
                };
              }} 
             />
        <Screen
               name="conf"
               component={ConfirmReservation}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:""
                };
              }} 
             />
        <Screen
               name="station"
               component={StationnementTemp}
               options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#303840'},
                  title:"Emplacement Stationnement"
                };
              }} 
             />
        <Screen
               name="pageRs"
               component={PageRsvStationnement}
               
               
             />
        </Navigator>
        </NavigationContainer> */}
     {/* <Acceuil /> */}
     {/* <Parking /> */}
     {/* <StationnementTemp /> */}
     {/* <PageRsv /> */}
     {/* <PageRsvStationnement /> */}
     {/* <ViewChoosePayment /> */}
     <ViewReceipt />
     {/* <ConfirmReservation /> */}
     {/* <SignUp /> */}
     {/* <Login /> */}
    </View>
  )
}

export default App