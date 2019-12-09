import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import store from './store'
import { auth } from 'firebase'

class MyListComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: ''
      }
    }

    onChange(text) {
      this.setState({value: text})
    }

    onClick() {
      this.setState({value: ''})
      
      this.props.store.dispatch('ADD_ITEM', {
        label: this.state.value,
        date: this.state.date,
        color: Math.floor(Math.random()*16777215).toString(16),
        owner: this.props.store.state.user.uid
      })
    }

    onItemDelete(item, index) {
      this.props.store.dispatch('DELETE_ITEM', { id: item.id })
    }

    onItemPress(item, index) {
      this.props.store.dispatch('SET_ITEM_COLOR', {
        id: item.id,
        color: Math.floor(Math.random()*16777215).toString(16)
      })
    }

    componentDidMount() {
      var that = this;
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      that.setState({
        //Setting the value of the date time
        date:
          date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
      });
    }

    render() {
        const items = []

        this.props.store.state.items.forEach((item, i) => 
          items.push((
            <View key={i} style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'grey'}} onPress={() => this.onItemDelete(item, i)}>
                <Text style={{fontSize: 36, alignSelf: 'center', marginTop: 0, color: 'white'}}>x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onItemPress(item, i)} style={{height: 50, marginBottom: 10, backgroundColor: `#${item.color}`, padding: 10}}>
                <Text style={{fontSize: 24, color: 'white', marginTop: 0}}>{item.label} - {this.state.date}</Text>
              </TouchableOpacity>
            </View>
        ))
        )
console.dir(auth)
      return (
        <View>
          <Text style={{fontSize: 20, alignSelf: 'center', margin: 20}}>{this.props.store.state.user.email}</Text>
          <View style={{marginBottom: 50, flexDirection: 'row', alignSelf: 'center'}}>
            <TextInput style={{backgroundColor: 'white'}} value={this.state.value} onChangeText={text => this.onChange(text)}/>
            <Button disabled={!this.state.value} title="Add To Do" onPress={() => this.onClick()}/>
          </View>
          {items}
          <TouchableOpacity style={{margin: 20}} onClick={() => auth.signOut()}><Text style={{alignSelf: 'center'}}>Sign Out</Text></TouchableOpacity>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent