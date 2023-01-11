import {TouchableWithoutFeedback,Text,View} from "react-native"
import {colors} from '../../../stylesheets/themes'

export default function NextButton(){
    return(
        <TouchableWithoutFeedback>
        <View 
        style={{
          borderRadius:6,
          backgroundColor:colors.white,
          padding:8,            
          width:"85%",
          alignItems:"center"
        }}>
          <Text 
         
          style={{
            fontFamily:"Poppins_600SemiBold",
            fontSize:18,
            color:colors.black}}
          >Next
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
}