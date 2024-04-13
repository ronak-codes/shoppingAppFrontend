import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from "../../constants/index"
import {Ionicons} from "@expo/vector-icons"
import styles from "./Headings.style"
import {useNavigation} from "@react-navigation/native"

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductsList")}>
            <Ionicons name="grid" size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings