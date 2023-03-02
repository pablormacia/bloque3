import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({style,...otherProps}) => {
  return (
    <View>
      <TextInput style={{...styles.input,...style}} {...otherProps} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor: 'gray',
        borderBottomWidth:1,
        marginVertical:10,
    }
})