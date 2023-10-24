import { StyleSheet, Text, View , Modal,Image , TextInput, Button} from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({visible , onAddCourse}) {
    const [enteredCourselText , setEnteredCourseText] = useState('')
    const addCourseHandler = () => {
        onAddCourse(enteredCourselText)

    }
    // const CourseInputHandler = (enteredText) => {
    //   setEnteredCourseText(enteredText)

    // }

  return (
    <Modal 
        animationType="slide"
        visible={visible}
        >
        <View style={styles.inputContainer}>
          <Image style={styles.image}  source={require('../assets/images/ybk.png')}/>
          <TextInput  style={styles.textİnput}
          placeholder='Yeni Kurs Ekle'
          value={enteredCourselText}
          onChangeText={(text)=>setEnteredCourseText(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='İptal Et' color={"red"}/>
            </View>
            <View style={styles.button}>
              <Button title='Ekle' color={"blue"}
              onPress={addCourseHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
      flex:1 ,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: 15,
  },
  image:{
    width: 130 ,
    height: 100 ,
    borderRadius: 2,
    margin: 20 ,
  },
  textİnput:{
    borderWidth: 1,
    width:'100%',
    padding: 10,
    borderRadius: 10,
    borderColor: 'pink',
    backgroundColor: 'pink',
  },
  buttonContainer:{
      flexDirection:'row',
      marginTop: 15,

  },
  button:{
    width: 100 ,
    marginHorizontal:8 ,

  },

})