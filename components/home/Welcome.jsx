import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {Feather,Ionicons} from "@expo/vector-icons"
import styles from './Welcome.style'
import { COLORS,SIZES } from '../../constants'
import { useNavigation } from "@react-navigation/native"

const Welcome = () => {
  // Find The Most Luxurious Furniture
  const navigation= useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black,SIZES.xSmall)}>
            {" "}
            Find Your Passion
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary,0)}>
            {" "}Through Sports
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
                style={styles.searchInput}
                value=""
                onPressIn={()=>navigation.navigate("Search")}
                placeholder='What are you looking for?'
            />
        </View>
        <View>
            <TouchableOpacity style={styles.searchBtn}>
                <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.secondary}/>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Welcome