import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20
    }
})

const TodoDetails = ({ navigation }) => {
    const item = navigation.getParam('item', {label: 'No label provided', done: false})
    
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24, marginBottom: 10}}>{item.label} is {item.done ? 'done' : 'not done'}</Text>
            <Button title="Go back to list" onPress={() => navigation.goBack()}/>
        </View>
    )
}

TodoDetails.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').label
})

export default TodoDetails