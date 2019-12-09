import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import store from './store'
import { auth } from './firebase'

class MyListComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: '',
        newUser: false
      }
    }

    onChangeEmail(text) {
      this.setState({email: text})
    }

    onChangePassword(text) {
      this.setState({password: text})
    }

    onChangeName(text) {
      this.setState({name: text})
    }

    toggleNewUser() {
      this.setState({newUser: !this.state.newUser})
    }

    onClick() {
      if(this.state.newUser)
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      else
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    }

    render() {
      return (
        <View>
          <Text style={{fontSize:40, alignSelf: 'center', margin: 10}}>Welcome!</Text>
          <Text style={{fontSize:28, alignSelf: 'center', margin: 10, marginBottom: 20}}>Please log in to your account.</Text>
          {this.state.newUser && <TextInput placeholder="name" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10, alignSelf: 'center'}} value={this.state.name} onChangeText={text => this.onChangeName(text)}/>}        
          <TextInput placeholder="email" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10, alignSelf: 'center'}} value={this.state.email} onChangeText={text => this.onChangeEmail(text)}/>
          <TextInput secureTextEntry={true} placeholder="password" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10, alignSelf: 'center'}} value={this.state.password} onChangeText={text => this.onChangePassword(text)}/>
        
          <TouchableOpacity style={{width: 100, height: 35, backgroundColor: 'grey', alignSelf: 'center', marginTop: 20}} disabled={!this.state.email && !this.state.password} title={this.state.newUser ? 'Sign Up' : "Log In"} onPress={() => this.onClick()}>
            <Text style={{fontWeight: 600, textAlign: 'center', marginTop: 8, color: 'white'}}>{!this.state.newUser ? 'LOG IN' : 'SIGN UP'}</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => this.toggleNewUser()} style={{marginTop: 10, alignSelf: 'center'}}><Text>or {!this.state.newUser ? 'Sign Up' : 'Log In'}</Text></TouchableOpacity>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent