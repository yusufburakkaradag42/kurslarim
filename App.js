import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setModelIsVisible] = useState(false)
  const startModal = () => {
    setModelIsVisible(true);
  }


  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
     <Button
      title='Kurs ekle' 
      color={"red"}
      onPress={startModal}
      />
      <CourseInput 
      visible={modalIsVisible}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60 , 
    paddingHorizontal: 20,
  },
});
