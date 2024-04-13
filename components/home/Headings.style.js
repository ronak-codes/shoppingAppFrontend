import { StyleSheet } from "react-native";
import {SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:12,
        marginTop:8
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    headerTitle:{
        fontFamily:"semibold",
        fontSize:SIZES.xLarge-2,
    }
})

export default styles