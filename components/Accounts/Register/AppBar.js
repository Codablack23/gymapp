import { Text, TouchableWithoutFeedback,Image,View,Dimensions} from "react-native";
import back from "../../../assets/images/back.png"

function BackButton({goBack}){
    return <TouchableWithoutFeedback onPress={goBack}>
        <View style={{marginRight:"auto"}}>
        <Image source={back}/>
        </View>
    </TouchableWithoutFeedback>
}

export default function AppBar({title,goBack}){
    const {width} = Dimensions.get("window")
    return (
        <View
        style={{
            height:70,
            width:"100%",
            marginBottom:32,
            backgroundColor:"rgba(255, 255, 255, 0.2)",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            paddingHorizontal:16,
            position:"relative"
        }}
        
        >
            <BackButton goBack={goBack}/>
            <Text 
            style={{
                fontFamily:"Poppins_600SemiBold",
                fontSize:18,
                lineHeight:27,
                marginRight:"auto",
                color:"#fff",
                textTransform:"capitalize",
            }}
            >
                {title}
            </Text>
        </View>
    )
}