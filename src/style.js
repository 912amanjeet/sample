import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const external = StyleSheet.create({
  
    //LoginCss
    LoginTextInput: {
        width: "85%",
        height: "15%",
        opacity: .5,
        marginTop: "8%",
        borderRadius: 5,
        paddingLeft: "5%",
        borderColor:"#D3D3D3",
        borderWidth:1
    },
        maincontainer2: {
        flex: 1,
       
                       },
   
    LoginWelcomeView: {
        width: "70%",
        alignSelf:"center"
   
    },
    LoginWelcomeText: {
        fontSize: 40,
        paddingTop: "35%",
        fontWeight: "bold",
        alignSelf:"center"
     
    },
    SignintojoinText: {
        paddingLeft: "8%",
        paddingTop: "6%",
      
    },
    LogintextinputButtonMainView: {
        width: "100%",
        height: "50%",
        alignItems: "center",
  
        marginTop: "15%"
    },
    LoginHeaderSigninView: {
        width: "80%",
        height: "5%",
        alignSelf: "center",
        marginTop: "35%",
        alignItems: "center",

    },
  
  
   
  
});
export default external;




//export default external;