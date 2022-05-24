import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../helpers/colors';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
const width = Dimensions.get('screen').width/2 - 30

const Card = ({flower, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', flower) }>
      <View style={styles.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View style={{width: 30, height:30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: flower.item.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)'}}>
            <MaterialIcons name="favorite" size={18} color={flower.item.like ? colors.red : colors.dark} />
          </View>
        </View>
        <View style={{height:100, alignItems: 'center'}}>
            <Image style={{flex: 1, height:100, width: 100, resizeMode:'contain'}} source={flower.item.img}></Image>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>{flower.item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>${flower.item.price}</Text>
          <View style={{height:25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='md-add-circle' size={25} color={colors.orange} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#f5f5f5',
    width,
    marginHorizontal:2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15
  }
})
export default Card;