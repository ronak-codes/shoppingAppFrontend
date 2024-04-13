import { View, Text, TouchableOpacity,Image, Alert } from 'react-native'
import React, {useState} from 'react'
import styles from "./productDetails.style"
import { COLORS, SIZES, BASE_URL } from '../constants';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native"
import axios from "axios"
import {useStripe} from "@stripe/stripe-react-native"

const ProductDetails = ({navigation}) => {

    const route = useRoute();
    const{item} = route.params;
    const [count,setCount]= useState(1);
    const{initPaymentSheet,presentPaymentSheet} = useStripe();

    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () => {
        if(count>1){
            setCount(count-1);
        }
    }

    const onCheckOut = async () =>{
        try{
            // create paymentintent
            const response = await axios.post(`${BASE_URL}/payments/intent`,{amount:Math.floor(count*(item.price)*100)})
            if(response.error){
                Alert.alert("Something Went Wrong");
                return;
            }

            // initializePayment sheet
            const initResponse = await initPaymentSheet({
                merchantDisplayName:"john doe",
                paymentIntentClientSecret:response.data.paymentIntent,
            })
            if(initResponse.error){
                Alert.alert("Something went wrong");
                return;
            }

            // Present PaymentSheet;
            const paymentResponse = await presentPaymentSheet();
            if(paymentResponse.error){
                console.log("The error is",paymentResponse)
                Alert.alert("Something went wrong")
                return;
            }
            Alert.alert("Payment Completed");
            navigation.navigate("Home");

        }catch(error){
            console.log("error occured",error);
        }

    }

  return (
    <View style={styles.container}> 

      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="heart" size={30} color={COLORS.secondary}/>
        </TouchableOpacity>
      </View>

      <Image
        source={{uri:item.imageUrl}}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>Rs {item.price}</Text>
            </View>
        </View>

        <View style={styles.ratingRow}>
            <View style={styles.rating}>    
                {[1,2,3,4,5].map((index)=>(
                    <Ionicons 
                        key={index}
                        name="star"
                        size={24}
                        color="gold"
                    />
                ))}
                <Text style={styles.ratingText}>{4.8}</Text>
            </View>

            <View style={styles.rating}>  
                <TouchableOpacity onPress={()=>decrement()}>
                    <SimpleLineIcons 
                        name="minus"
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{count}</Text>
                <TouchableOpacity onPress={()=>increment()}>
                    <SimpleLineIcons 
                        name="plus"
                        size={20}
                    />
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={{marginBottom:SIZES.small}}>
            <View style={styles.location}>
                <View style={{flexDirection:"row"}}>
                    <Ionicons name="location-outline" size={20}/>
                    <Text>  {item.product_location}</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                    <Text>  Free Delivery</Text>
                </View>

            </View>
            
        
        </View>
        <View style={styles.cartRow}>
            <TouchableOpacity onPress={() =>onCheckOut()} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{}} style={styles.addCart}>
                <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ProductDetails