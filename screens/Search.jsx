import { View, TouchableOpacity, TextInput,FlatList,Image, Text } from 'react-native'
import React , {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS,SIZES,BASE_URL} from '../constants'
import { Feather, Ionicons} from "@expo/vector-icons"
import styles from "./search.style"
import axios from"axios";
import SearchList from '../components/products/SearchList'

export default function Search() {
  const[searchKey,setSearchKey] = useState('');
  const[searchResult,setSearchResult] = useState([]);

  const handleSearch = async () =>{
    try{
      const response = await axios.get(`${BASE_URL}/products/search/${searchKey}`)
      setSearchResult(response.data);
    }catch(error){
      console.log("Error is ",error);
    }
  }
  

  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>
          <TouchableOpacity>
              <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
              <TextInput 
                style={styles.searchInput}
                value={searchKey}
                onChangeText={setSearchKey}
                placeholder='What are you looking for?'
              />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
                <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite}/>
            </TouchableOpacity>
          </View>
      </View>
      {
        (searchResult.length === 0 || searchKey.length === 0) ? (
          <View style={{flex:1}}>
            <Image 
              source={require('../assets/images/Pose23.png')}
              style={styles.searchImage}
            />
          </View>
        ) : (
          <FlatList 
            data={searchResult}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=>(<SearchList item={item}/>)}
            style={{marginHorizontal:12}}
          />
        )
      }
    </SafeAreaView>
  )
}
