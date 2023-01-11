import { View,StyleSheet, ImageBackground, Image,Text, TouchableOpacity, Dimensions,SafeAreaView} from "react-native";
import { colors } from "../../stylesheets/themes";
import {LinearGradient} from "expo-linear-gradient"

export default function Step({heading,sub,active,index,imageSrc,pages}){
    console.log(index)
    const {width} = Dimensions.get("window")
  return (
    <View style={{...style.container,width}}>
    <View style={{flex:3}}>
        <ImageBackground style={style.image} imageStyle={{...style.roundedBottomfle}} source={imageSrc}>
          <LinearGradient  colors={['rgba(0,0,0,0.8)', 'transparent']} style={{...StyleSheet.absoluteFillObject,flex:1}}></LinearGradient>
        </ImageBackground>
        <View style={{paddingVertical:10,flexDirection:"row",paddingHorizontal:5,justifyContent:"center",alignItems:"center"}}>
           {Array(pages).fill("").map((t,i)=>(
            <View key={i} style={active == i +1?style.active:style.inactive}></View>
           ))}
        </View>
    
    </View>
    <View style={{...style.pad,...style.container,justifyContent:"space-between"}}>
    <View style={{flex:1,width:"90%"}}>
      <Text style={{color:"#fff",fontSize:40,fontFamily:"Poppins_400Regular",lineHeight:50,fontWeight:"600"}} >{heading}</Text>
      <Text style={{
        color:"#616161",
        paddingVertical:6,
        lineHeight:27,
        fontFamily:"Poppins_400Regular"
        }} 
        >{sub}</Text>
    </View>
   
    </View>
   </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
        flexDirection:"column",
        color:colors.white
    },
    image:{
       flex:1,
       borderBottomLeftRadius:10,
       borderBottomRightRadius:10,
    },
    pad:{
        paddingHorizontal:16,
        paddingVertical:16
    },
    roundedBottom:{
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    button:{
     backgroundColor:colors.white,
     color:colors.black,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:7,
     height:40
    },
    active:{
        height:10,
        width:25,
        marginRight:5,
        backgroundColor:"white",
        borderRadius:16
    },
    inactive:{
        height:10,
        width:10,
        marginRight:5,
        backgroundColor:"#616161",
        borderRadius:16
    }
})