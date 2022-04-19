import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import MapView  from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {

  const Stack = createStackNavigator()
  return (
    
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`h-1/2`}>
           <Map/>
        </View>
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
            name="navigationCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen
            name="RideOptionCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
            />
          </Stack.Navigator>

        </View>
      <Text style={tw`text-blue-500`}>I am the map screen</Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})