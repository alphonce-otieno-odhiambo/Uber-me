import { View, Text, FlatList, TouchableOpacity , Image} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id:"123",
    title:"Get a ride",
    image:"https://links.papareact.com/3pn",
    screen:"MapScreen",
  },
  {
    id:"456",
    title:"Order food",
    image:"https://links.papareact.com/28w",
    screen:"EatScreen",
  }
]

const NavOptions = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({item}) => (
      <TouchableOpacity style={tw`pl-6 pb-5 pt-4 bg-gray-200 m-2 `}>
       <View>
         <Image
         style={{
           height:120,
           width:128,
           resizeMode:"contain",
         }}
         source={{uri:item.image}}
         />
         <Text style={tw`mt-2 text-lg `}>{item.title}</Text>
       </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions;