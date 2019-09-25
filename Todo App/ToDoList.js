import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ToDoItem from './ToDoItem'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    input: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        padding: 10
    },

    inputRow: {
        flexDirection: 'row'
    },

    todos: {
        flexDirection: 'column'
    },

    button: {

    },
})

class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            items: []
        }

        this.onBoundInputChange = this.onInputChange.bind(this)
        this.onBoundButtonPress = this.onButtonPress.bind(this)
    }

    onInputChange(text) {
        this.setState({ value: text })
    }

    onButtonPress() {
        const items = this.state.items;
        items.push(this.state.value)
        this.setState({ value: '', items: items })
    }

    render() {
        // Mapping
        const todoItems = this.state.items.map((item) => <ToDoItem item={item} />)

        return (
            <View style={styles.container}>
                <View style={styles.inputRow}>
                  <TextInput
                    value={this.state.value}
                    style={styles.input}
                    onChangeText={this.onBoundInputChange}
                  />
                  <Button
                    style={styles.button}
                    onPress={this.onBoundButtonPress}
                    title=" Add "
                    disabled={this.state.value === ''}
                  />
                  <Button
                    style={styles.button}
                    onPress={() => this.setState({ value: '', items: [] })}
                    title=" Clear "
                  />
                </View>
                <View style={styles.todos}>
                    {todoItems}
                </View>
            </View>
        )
    }    
}

export default ToDoList;