import { TouchableWithoutFeedback, View,Text } from "react-native";
import AppBar from "./AppBar";
import { colors } from "../../../stylesheets/themes";


export default function RegisterLayout({title,children,goBack}){
  return (
    <View style={{flex:1,position:"relative"}}>
        <AppBar title={title} goBack={goBack}/>
        <View style={{flex:1,paddingHorizontal:16}}>
            {children}
        </View>
    </View>
  )
}