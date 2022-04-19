import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';


const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`h-1/2`}>
           <Map/>
        </View>
        <View style={tw`h-1/2`}>

        </View>
      <Text style={tw`text-blue-500`}>I am the map screen</Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})