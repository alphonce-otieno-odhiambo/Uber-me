import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';


const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl py-5`}>Good morning Ali</Text>
      <View style={tw`border-t border-grey-200 flexShrink:  `}>
          <View>

          </View>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})