import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./NewArrivals.style"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants'
import ProductsList from '../components/products/ProductsList'

const NewArrivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
                </TouchableOpacity>
                <Text style={styles.heading}>Products</Text>
            </View>
            <ProductsList />
        </View>
    </SafeAreaView>
  )
}

export default NewArrivals