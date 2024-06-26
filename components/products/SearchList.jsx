import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from "./SearchList.style"
import {useNavigation} from "@react-navigation/native" 

const SearchList = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("ProductDetails",{item})}>
        <View style={styles.image}>
            <Image 
                source={{uri:item.imageUrl}}
                style={styles.productImage}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.supplier}>{item.supplier}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SearchList