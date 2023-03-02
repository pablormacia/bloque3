import { Button, StyleSheet, Text, TextInput, View,TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import  colors  from '../constants/colors'

const StartGameScreen = () => {
  const [enteredValue,setEnteredValue]=React.useState("")

  const handleInputNumber = text=>{
    setEnteredValue(text.replace(/[^0-9]/g),"")
  }

  return (
    <TouchableWithoutFeedback onPress={()=>keyBoardType.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.inputContainer}>
        <Text>Elegí un número</Text>
        <TextInput style={styles.input} 
          blurOnSubmit
          autoCapitalization="none"
          autoCorrect={false}
          keyBoardType="number-pad"
          maxLenght = {2}
          onChangeText={handleInputNumber}
          value={enteredValue}

        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Limpiar" onPress={null}  color={colors.accent}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirmar" onPress={null} color={colors.primary} />
          </View>
        </View>
      </Card>

    </View>
    </TouchableWithoutFeedback>
  )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    title: {
      fontSize:20,
      marginVertical:10,
    },
    inputContainer:{
      width:300,
      maxWidth:'80%',
      padding:20,
      alignItems: 'center',
      
    },
    buttonContainer:{
      flexDirection: 'row',
      width:'100%',
      paddingHorizontal:15,
      justifyContent: 'space-between'
    },
    button: {
      width: 100,
    },
    input:{
      width:50,
      textAlign:'center'
    }
})

export default StartGameScreen