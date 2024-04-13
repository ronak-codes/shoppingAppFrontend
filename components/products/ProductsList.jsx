import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../constants';
import styles from "./ProductsList.style"

const ProductsList = () => {

    const {data,isLoading,error} = useFetch();
    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
            </View>
        )
    }

    return (
    <View style={styles.container}>
        <FlatList 
            data={data}
            renderItem={({item})=>(<ProductCardView item={item}/>)}
            numColumns={2}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    </View>
  )
}

export default ProductsList