import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {NewArrivals,ProductDetails} from "./screens/index"
import {StripeProvider} from "@stripe/stripe-react-native"


const Stack = createNativeStackNavigator();
const STRIPE_PUBLISHABLE_KEY ="pk_test_51P4nvESGMvuIu5oCVquabxEAp7JTIYYQ65COA0V7buS0DHEe62P0CnebuuQGUwLL72RIrBjqyVCjsBBIDOOZVSP8006cVwACWT"

export default function App() {

  const [fontsLoaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    } 
  },[fontsLoaded])

  if(!fontsLoaded){
      console.log("Fonts are not loaded");
      return null;
  }

  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="ProductDetails"
            component={ProductDetails}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="ProductsList"
            component={NewArrivals}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}


