import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import Noteitem from './components/noteitem';
import AddNote from './components/addNote';

export default function App(){
  const [notes, setNotes] = useState([
    {text:'Möbile Prögrämmin', key: '1'},
    {text:'Web prögröms', key: '2'},
    {text:'Last task progrämmings', key: '3'},
  ])

  const pressHandler = (key) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => note.key != key);
    })
  }

  const submitHandler = (text) => {
    const notesArray = notes.map(text => text.text)
    if(notesArray.includes(text)){
      Alert.alert(
        "I command thee kneel",
        "This noteth hast been already did add",
        [
          { 
            text: "I shall kneel",
            onPress: () => console.log("Kneel'd"),
          }
        ]
      )
    }
    else{
      setNotes((prevNotes) =>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevNotes
        ]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddNote submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={notes}
            renderItem={({item})=>(
            <Noteitem item={item} pressHandler={pressHandler}/>
        )}
      />
    </View>
  </View>
  
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list:{
    borderRadius: 25,
    flex: 1,
    marginTop: 20,
    backgroundColor: '#deb887',
  }
});