import Carousel from "react-native-snap-carousel";
import Step from "../components/GetStarted/Step";
import {Dimensions, View,TouchableOpacity,StyleSheet,Text,Image} from 'react-native'
import { colors } from "../stylesheets/themes"
import { Pages } from "react-native-pages";
import logo from "../assets/images/logo2.png"
import slide1 from "../assets/images/slide1.png"
import slide2 from "../assets/images/slide2.png"
import slide3 from "../assets/images/slide3.png"


export default function GetStarted(){
  const data = [
  {
  heading:"Find a Gym ",
  sub:"Find the perfect gym near you",
  active:1,
  imageSrc:slide1
  },
  {
  heading:"Find Your Program",
  sub:"Browes hundreds of programs and find the perfect program fro you",
  active:2,
  imageSrc:slide2
  },
  {
  heading:"Schedule your workouts",
  sub:"Find the perfect workouts that fit your style and schedule ",
  active:3,
  imageSrc:slide3
  },
]
  const {width} = Dimensions.get("window")

   return (
    <View style={{flex:1,justifyContent:"space-between"}}>
        <View style={{
        position:"absolute",
        ...style.pad,
        width,top:0,zIndex:3,flexDirection:"column",flex:1,
        }} >
           <Image  source={logo} style={{
            flex:1,
             aspectRatio: 1.5, 
            resizeMode: 'contain',
           }}/>
       </View>
     <View style={{flex:7}}>
      <Pages indicatorPosition={"none"}>
        {data.map((slide,i)=>(<Step {...slide} key={i}/>))}
      </Pages>
     </View>
     <View style={{flex:1,...style.pad}}>
     <View style={{flex:1,justifyContent:"flex-end"}}>
      <TouchableOpacity onPress={()=>console.log("pressed")}>
        <View style={{...style.button,flexDirection:"column"}}>
            <Text style={{color:"#000",fontFamily:"Poppins_400Regular"}}>Get Started</Text>
        </View>
     </TouchableOpacity>
    <View style={{flexDirection:"row",marginTop:8,justifyContent:"center"}}>
      <Text style={{color:"#616161",paddingVertical:6,fontFamily:"Poppins_400Regular"}}>Don't Have an Account? </Text>
      <Text style={{color:"#fff",paddingVertical:6,fontFamily:"Poppins_400Regular"}} >Sign Up</Text>
    </View>
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
   fontFamily:"Poppins_400Regular",
   borderRadius:7,
   height:40
  }
})