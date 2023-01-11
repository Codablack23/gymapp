import { useFonts,Poppins_400Regular,Poppins_700Bold,Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useState} from 'react';
import { StyleSheet, View,StatusBar } from 'react-native';
import GetStarted from './screens/GetStarted';
import Login from './screens/Login';
import Register from './screens/Register';
import SetPassword from './screens/SetPassword';
import Interest from './screens/Interest';
import Allergies from './screens/Allergies';
import Health from './screens/Health';

export default function App() {
  const [loggedIn,setIsLoggedIn] = useState(false)
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  })
  if(!fontsLoaded){
    return null
  }
  return (
    <View style={{...styles.container}}>
      {/* <GetStarted/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <SetPassword/> */}
      {/* <Interest/> */}
      {/* <Allergies/> */}
      <Health/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#000',
    alignItems:"stretch",
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight,
    // fontFamily:"Poppins_400Regular"
  },
});