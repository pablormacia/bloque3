import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({style,children}) => {
  return (
    <View style={{...styles.inputCard,...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    inputCard:{
        shadowColor: 'black',
      shadowOffset: {width:0, height:2},
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    }
})