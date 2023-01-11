import { StyleSheet, View,Text,TextInput} from "react-native";
import RegisterLayout from "../components/Accounts/Register/RegisterLayout";
import { colors } from "../stylesheets/themes";
import NextButton from "../components/Accounts/Register/NextButton";


export default function Register(){
    return (
    <RegisterLayout title={"sign up"} goBack={()=>console.log("pressed")}>
        <View style={style.form}>
           <View>
           <View style={{marginBottom:13}}>
                <Text style={style.label}>Username</Text>
                <TextInput 
                placeholderTextColor={colors.grey} 
                cursorColor={"#fff"}
                style={style.input} 
                placeholder="Enter Username"/>
            </View>
             <View style={{marginBottom:13}}>
                <Text style={style.label}>Mobile Number</Text>
                <TextInput 
                placeholderTextColor={colors.grey} 
                cursorColor={"#fff"}
                style={style.input} 
                placeholder="Enter Username"/>
            </View>
            <View style={{marginBottom:13}}>
                    <Text style={style.label}>Email</Text>
                    <TextInput 
                    placeholderTextColor={colors.grey} 
                    cursorColor={"#fff"}
                    style={style.input} 
                    placeholder="Enter Username"/>
            </View>
            <View style={{marginBottom:13}}>
                <Text style={style.label}>Weight</Text>
                <View  style={{...style.input,flexDirection:"row",alignItems:"center"}}>
                    <TextInput 
                    style={{color:colors.white,width:"90%"}}
                    placeholderTextColor={colors.grey} 
                    cursorColor={"#fff"}
                    placeholder="Enter Weight"
                    />
                    <Text style={style.label}>Kg</Text>
                </View>
            </View>
            <View style={{marginBottom:13}}>
               <Text style={style.label}>Height</Text>
                <View  style={{...style.input,flexDirection:"row",alignItems:"center"}}>
                    <TextInput 
                    style={{color:colors.white,width:"90%"}}
                    placeholderTextColor={colors.grey} 
                    cursorColor={"#fff"}
                    placeholder="Enter Height"
                    />
                    <Text style={style.label}>Cm</Text>
                </View>
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