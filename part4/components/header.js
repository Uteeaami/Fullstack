import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Here Be My Notes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 37,
        backgroundColor: '#DEB887'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    }
});