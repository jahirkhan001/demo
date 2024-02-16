import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImgPath from '../assets/ImgPath'

const Login = () => {
  return (
    // MainView
    <View style={{ flex: 1 }}>
    {/* MainView */}
      <View style={{alignItems:'center'}}>
      <Text style={{
        fontFamily: "Pacifico-Regular",
        fontSize: 50,
        color:'black'
      }}>CL<Text style={{  fontFamily: "Pacifico-Regular",
      fontSize: 50,
      color:'blue'}}>D</Text></Text>
      <View style={{ width: '100%', height: 350 }}>
        <Image source={ImgPath.Applogo} resizeMode='center' style={{ width: '100%', height: 300 }} />
      </View>
      <View style={{width:'100%',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
<TextInput placeholder='Mobile No' placeholderTextColor={'#111'} style={{backgroundColor:'#ccc4',width:'80%',borderRadius:12,fontWeight:'300',fontSize:15,padding:10}}/>
<View style={{borderWidth:0.2,height:34,position:'absolute',right:'33%'}}></View>
<TouchableOpacity style={{position:'absolute',right:'15%'}}>
  <Text>Send OTP</Text>
</TouchableOpacity>
      </View>
      <View style={{width:'100%',alignItems:'center',marginTop:20,justifyContent:'center'}}>
<TextInput placeholder='Enter OTP' placeholderTextColor={'#111'} style={{backgroundColor:'#ccc4',width:'80%',borderRadius:12,fontWeight:'300',fontSize:15,padding:10}}/>
      </View>
      <View style={{width:'100%'}}>
        <TouchableOpacity style={{backgroundColor:'blue',width:'80%',alignSelf:'center',borderRadius:15,marginTop:28,elevation:4,borderWidth:0.3, }}>
          <Text style={{padding:20,color:'white',textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})