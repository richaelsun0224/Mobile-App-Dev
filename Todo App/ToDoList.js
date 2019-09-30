import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TodoItem from './TodoItem' 

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
      flexDirection: 'row',
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: 3,
      shadowOpacity: 1
  },

  todos: {
      flexDirection: 'column'
  },

  button: {
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 3,
      shadowOpacity: 1
  }
})

class TodoList extends React.Component {
    static navigationOptions = {
      title: 'School Work',
    }

    constructor(props) {
        super(props)

        const initialItems = [] 
        
        this.state = {
            value: '',
            items: initialItems
        }

        this.onBoundInputChange = this.onInputChange.bind(this)
        this.onBoundButtonPress = this.onButtonPress.bind(this)
        this.onBoundToggleDone = this.onToggleDone.bind(this)
    }

    onInputChange(text) {
        this.setState({ value: text })
    }

    onButtonPress() {
        const items = this.state.items
        items.push({label: this.state.value, done: false, i: this.state.items.length})
        this.setState({ value: '', items: items })
    }

    onToggleDone(index) {
      const item = this.state.items[index]
      item.done = !item.done
      this.setState({items: this.state.items.slice(0)})
      this.props.navigation.navigate('Details', { item: item })
    }

    render() {
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
                {/* <ScrollView style={styles.todos}>
                    {todoItems}
                </ScrollView> */}
                <FlatList
                    data={this.state.items}
                    removeClippedSubviews={true}
                    initialNumToRender={3}
                    extraData={this.state.items.length}
                    renderItem={(props) => (
                      <TodoItem
                        label={props.item.label}
                        done={props.item.done}
                        index={props.item.i}
                        onToggleDone={this.onBoundToggleDone}
                      />
                    ) }
                    keyExtractor={item => String(item.i)}
                />
            </View>
        )
    }    
}

export default TodoList;