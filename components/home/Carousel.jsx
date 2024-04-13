import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { SliderBox } from 'react-native-image-slider-box'
import sports1 from "../../assets/images/sports1.jpg"
import sports2 from "../../assets/images/sports2.jpg"
import sports3 from "../../assets/images/sports3.png"


const Carousel = () => {
  const slides=[sports1,sports2,sports3];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle ={{borderRadius:15,width:"93%",marginTop:15}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel


const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
    
})