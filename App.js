import { View, Text } from 'react-native'
import React from 'react'
import Acceuil from './components/Acceuil'
import Parking from './components/Parking'
import PageRsv from './components/PageRsv'
import ViewChoosePayment from './components/ViewChoosePayment'
import ViewReceipt from './components/ViewReceipt'
import ConfirmReservation from './components/ConfirmReservation'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:"#303840"}}>
     {/* <Acceuil /> */}
     {/* <Parking /> */}
     {/* <PageRsv /> */}
     {/* <ViewChoosePayment /> */}
     {/* <ViewReceipt /> */}
     <ConfirmReservation />
    </View>
  )
}

export default App