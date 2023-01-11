import { StyleSheet, View,Text,TextInput} from "react-native";
import RegisterLayout from "../components/Accounts/Register/RegisterLayout";
import { colors } from "../stylesheets/themes";
import NextButton from "../components/Accounts/Register/NextButton";


export default function SetPassword(){
    return (
    <RegisterLayout title={"set password"} goBack={()=>console.log("pressed")}>
        <View style={style.form}>
           <View>
            <View style={{marginBottom:13}}>
                <Text style={style.label}>Password</Text>
                <TextInput 
                placeholderTextColor={colors.grey} 
                cursorColor={"#fff"}
                style={style.input} 
                placeholder="Enter Password"/>
            </View>
             <View style={{marginBottom:13}}>
                <Text style={style.label}>Confirm Pasword</Text>
                <TextInput 
                placeholderTextColor={colors.grey} 
                cursorColor={"#fff"}
                style={style.input} 
                placeholder="Enter Password"/>
            </View>
           </View>
           <View style={{alignItems:"center"}}>
            <NextButton/>
           </View>
        </View>
    </RegisterLayout>
    )
}

const style = StyleSheet.create({
    label:{
        fontFamily:"Poppins_400Regular",
        color:colors.white,
    },
    input:{
        backgroundColor:"rgba(255, 255, 255, 0.2)",
        padding:8,
        borderRadius:13,
        color:colors.white,
        marginVertical:4,
        fontFamily:"Poppins_400Regular",

    },
    form:{
      flex:1,
      justifyContent:"space-between"
    }
})