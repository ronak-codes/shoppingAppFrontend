import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";
const styles = StyleSheet.create({

    loadingContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    container:{
        paddingTop:SIZES.xxLarge-8,
        paddingLeft:3
    },
    separator:{
        height:16
    }
})

export default styles;