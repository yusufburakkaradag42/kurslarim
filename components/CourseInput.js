import { StyleSheet, Text, View , Modal,Image , TextInput, Button} from 'react-native'
import React from 'react'

export default function CourseInput({visible}) {
  return (
    <Modal 
        animationType="slide"
        visible={visible}
        >
        <View style={styles.inputContainer}>
          <Image style={styles.image}  source={require('../assets/images/ybk.png')}/>
          <TextInput  style={styles.textİnput}
          placeholder='Yeni Kurs Ekle'
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='İptal Et' color={"red"}/>
            </View>
            <View style={styles.button}>
              <Button title='Ekle' color={"blue"}/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer:{

  },
  image:{
    width: 100 ,
    height: 100 ,
  },
  textİnput:{

  },
  buttonContainer:{

  },
  button:{

  },

})