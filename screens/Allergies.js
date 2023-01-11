import { StyleSheet, View,Text,TextInput, TouchableWithoutFeedback} from "react-native";
import RegisterLayout from "../components/Accounts/Register/RegisterLayout";
import { colors } from "../stylesheets/themes";
import NextButton from "../components/Accounts/Register/NextButton";
import { useState } from "react";


export default function Allergies(){
    const [option,setSelected] = useState([])
    const [options] = useState([
        "Yes",
        "No",
    ])
    return (
    <RegisterLayout title={"Health"} goBack={()=>console.log("pressed")}>
        <View style={style.form}>
           <View>
            <Text style={style.header}>Do you have any Allergies?</Text>
            {options.map((answer,i)=>(
                 <TouchableWithoutFeedback key={i}>
                 <View style={{...style.input,marginBottom:13}}>
                     <Text style={{fontFamily:"Poppins_600SemiBold",color:colors.white,fontSize:18}}>{answer}</Text>
                 </View>
             </TouchableWithoutFeedback>
            ))}
           </View>
           <View style={{alignItems:"center"}}>
            <NextButton/>
           </View>
        </View>
    </RegisterLayout>
    )
}

const style = StyleSheet.create({
    header:{
        fontSize:40,
        color:colors.white,
        lineHeight:45,
        fontFamily:"Poppins_600SemiBold",
        marginBottom:20
    },
    label:{
        fontFamily:"Poppins_400Regular",
        color:colors.white,
    },
    input:{
        backgroundColor:"rgba(255, 255, 255, 0.2)",
        padding:8,
        borderRadius:10,
        color:colors.white,
        marginVertical:4,
        height:50,
        fontFamily:"Poppins_400Regular",
        justifyContent:"center"

    },
    form:{
      flex:1,
      justifyContent:"space-between"
    }
})