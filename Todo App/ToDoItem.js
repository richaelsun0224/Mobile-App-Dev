import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)'
    },

    itemHeading: {
        fontSize: 24,
        marginBottom: 5,
    },

    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },

    headingDone:{
        fontSize: 24,
        marginBottom: 5, 
        color: 'rgb(220, 220, 220)',
        textDecorationLine: 'line-through'
    },

    textDone: {
        fontSize: 16,
        marginBottom: 5,
        color: 'rgb(220, 220, 220)',
        textDecorationLine: 'line-through'
    }
})

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.onItemPress = this.onItemPress.bind(this)
    }

    onItemPress() {
        this.props.onToggleDone(this.props.index)
    }

    render() {
        const time = new Date()

        return (
            <TouchableOpacity onPress={this.onItemPress} style={[styles.item, this.props.done && styles.done]}>
                <Text style={this.props.done ? styles.headingDone : styles.itemHeading}>
                    {this.props.label}
                </Text>
                <Text style={this.props.done ? styles.textDone : styles.itemText}>
                    {this.props.done ? 'completed' : 'not completed'}
                </Text>
                <Text style={this.props.done ? styles.textDone : styles.itemText}>
                    Last rendered on: {time.toLocaleTimeString()}
                </Text>
            </TouchableOpacity>
        )
    }    
}

export default TodoItem;