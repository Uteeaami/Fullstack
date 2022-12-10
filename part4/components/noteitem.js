import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function noteitem({item, pressHandler}){
return(
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        marginHorizontal: 16,
        borderColor: '#000000',
        borderWidth: 0.5,
        borderStyle: 'dotted',
        borderRadius:10
    }
})