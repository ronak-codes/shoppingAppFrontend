import { View, Text, FlatList, ActivityIndicator} from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from "./ProductRow.style"
import useFetch from "../../hook/useFetch"

const ProductRow = () => {
 const {data,isLoading,error} = useFetch()
  return (
    <View style={styles.container}>
      {
        isLoading ? (
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
        ): error ? (
            <Text>Something Went Wrong</Text>
        ):(
        <FlatList
         data={data}
         renderItem={({item})=> <ProductCardView item={item}/>}
         keyExtractor={(item)=>item._id}
         horizontal
         contentContainerStyle={{columnGap:SIZES.medium}}
        />
        )
      }
    </View>
  )
}

export default ProductRow