import { ImageBackground, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import loginBg from '../assets/images/login.png'
import {LinearGradient} from "expo-linear-gradient"
import { colors } from "../stylesheets/themes";
import logo from "../assets/images/logo2.png"

export default function Login(){
    return(
       <View style={{flex:1,position:"relative"}}>
            <View style={{
            position:"absolute",
            ...style.pad,
            top:0,
            zIndex:3,
            flexDirection:"column",flex:1,
            }} >
                <Image  source={logo} style={{
                flex:1,
                aspectRatio: 1.5, 
                resizeMode: 'contain',
                }}/>
          </View>
          <View style={{flex:3}}>
             <ImageBackground style={{flex:1}} source={loginBg}>
               <LinearGradient  colors={['rgba(0,0,0,0.8)', 'transparent']} style={{...StyleSheet.absoluteFillObject,flex:1}}></LinearGradient>
             </ImageBackground>
          </View>
          <View style={{...style.container,...style.loginContainer}}>
             <Text style={style.heading}>Log in</Text>
             <View>
                   <View style={{marginBottom:13}}>
                   <Text style={{fontFamily:"Poppins_400Regular",color:colors.white}}>Username</Text>
                   <TextInput 
                   placeholderTextColor={colors.grey} 
                   cursorColor={"#fff"}
                   style={style.input} 
                   placeholder="Enter Username"/>
                   </View>
                   <View style={{marginBottom:13}}>
                   <Text style={{fontFamily:"Poppins_400Regular",color:colors.white}}>Password</Text>
                   <TextInput 
                     secureTextEntry={true}
                     style={style.input} 
                     placeholderTextColor={colors.grey}
                     cursorColor={"#fff"} 
                     placeholder="Enter Username"/>
              </View>
              <TouchableWithoutFeedback onPress={()=>console.log("Pressed")}>
                <Text style={{
                textAlign:"right",
                color:colors.white,
                fontFamily:"Poppins_400Regular",
                }}>
                    Forgot Password?
                </Text>
              </TouchableWithoutFeedback>
              <View style={{marginTop:16,alignItems:"center"}}>
                <TouchableWithoutFeedback>
                    <View style={style.button}>
                        <Text style={{fontFamily:"Poppins_600SemiBold",textAlign:"center"}}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{flexDirection:"row",marginTop:8}}>
                    <Text style={{color:colors.grey, fontFamily:"Poppins_400Regular"}}>Dont Have an Account? </Text>
                    <TouchableWithoutFeedback>
                        <Text style={{color:colors.white, fontFamily:"Poppins_600SemiBold"}}>Sign Up</Text>
                    </TouchableWithoutFeedback>
                </View>
              </View>
             </View>
         </View>
       </View>
    )
}

const style = StyleSheet.create({
    heading:{
        fontSize:40,
        lineHeight:60,
        color:colors.white,
        fontWeight:"500",
        fontFamily:"Poppins_600SemiBold",
    },
    input:{
        backgroundColor:"rgba(255, 255, 255, 0.2)",
        padding:8,
        borderRadius:13,
        color:colors.white,
        marginVertical:4,
        fontFamily:"Poppins_400Regular",

    },
    container:{
        flex:3,
        paddingHorizontal:16,
        paddingVertical:32,
    },
    pad:{
        paddingHorizontal:16,
        paddingVertical:16
    },
    loginContainer:{
        backgroundColor:colors.black,
        marginTop:-20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    button:{
        backgroundColor:colors.white,
        padding:8,
        borderRadius:13,
        textAlign:"center",
        width:"95%",
    }
    
})