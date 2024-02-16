import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ccc' }}>
      <View style={{ height: 60, }}>
        <Header />
      </View>
      <View style={{ height: 100, flexDirection: 'row', padding: 5 }}>
        <View style={{ borderWidth: 1, height: 25, width: 1, marginLeft: 10 }}></View>
        <Text style={{ marginLeft: 11, fontWeight: 'bold' }}>Upcomming</Text>
      </View>
    
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'#fff',borderRadius:13,marginHorizontal:10 }}>
        <View style={{ flex: 1, marginLeft:4 }}>
          <View>
            <Text style={{fontWeight:'200',fontSize:18,color:'black',fontFamily:'Roboto-Medimu'}}>Fri</Text>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 50, backgroundColor: 'blue', width: '20%' }}>
            <Text style={{ textAlign: 'center', color: 'black' }}>3</Text>
          </View>
        </View>
        <View style={{  flex: 1 }}>
          <View style={{ alignItems: 'center' }}>

            <Text>meeting for bussnies</Text>
              <Text>7:35 - 8:30 P.M</Text>
     </View>
        </View>
        <View style={{  flex: 1 }}>

        </View>
      </View> */}
      <View>
        <View style={{flex:1}}>

          <View style={{borderWidth:1,height:100,padding:10,margin:4}}>
            <Text style={{width:30,borderRadius:50,textAlign:'center',marginBottom:1}}>Fri</Text>
            <Text style={{borderWidth:1,width:30,borderRadius:50,backgroundColor:'blue',textAlign:'center'}}>3</Text>
          </View>
          {/* <View style={{flex:1,borderWidth:1}}></View> */}
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})