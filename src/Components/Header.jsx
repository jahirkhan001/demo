import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImgPath from '../assets/ImgPath'

const Header = ({
  Title='Home',
  FirstIcons=ImgPath.Filter,
  secondicons=ImgPath.Bell,
  thirdIcons=ImgPath.menu,
}) => {
  return (
    <View style={{flex:1}}>
   <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#ccc',elevation:2,padding:10,}}>

    <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.7}}>
    
    <View style={styles.Header}>
        <Image source={FirstIcons} style={styles.icon}/>
    </View>
    <View style={styles.Header}>
    <Text style={{fontFamily:'Roboto-Bold',color:'black',fontWeight:'600',fontSize:17}} >{Title}</Text>

    </View>
    </View>
   <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <View style={styles.Header}>
      <Image style={styles.icon} source={secondicons}/>
    </View>
    <View style={styles.Header}>
    <Image style={styles.icon} source={thirdIcons}/>

    </View>
   </View>


   </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
Header:{
    // borderWidth:1,
    // height:5,
    margin:5
},
icon:{
    width:30,
    height:30
}
})