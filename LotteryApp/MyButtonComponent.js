import { AsyncStorage, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React from 'react'
import store from './store'

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'orange',
    borderRadius: 5,
    flex: 1,
    width: 200,
    padding: 10,
    margin: 10,
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
})

class MyButtonComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: 0
      }

      this.onBoundInputChange = this.onInputChange.bind(this)
    }

    onInputChange(text) {
      this.setState({ value: text })
    }

    setNum() {
      this.props.store.dispatch("SET_NUMBER", { value: this.state.value })
    }

    onPress() {
      this.props.store.dispatch('RANDOM_NUMBER', {previous: this.props.store.state.number})
    }

    drawLotto() {
      if (this.props.store.state.list.length == 6) {
        this.props.store.dispatch("DRAW_LOTTO")
      }
    }

    onClaim() {
      var counter = 0;
      for (var i = 0; i < 6; i++) { 
          if (this.props.store.state.lottoList.includes(this.props.store.state.list[i])) {
            counter += 1;
          }
      }
      var prizeValue = Math.pow(10, counter)
      this.props.store.dispatch('CLAIM_PRIZE', { value: prizeValue })
    }

    reset() {
      this.props.store.dispatch('RESET')
    }

    render() {
      
      return (
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this.onBoundInputChange}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.btn} onPress={() => this.setNum()}>
            <Text>Add Your Lucky Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.onPress()}>
            <Text>Add a Random Number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.drawLotto()}>
             <Text>Get Lottery Numbers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.onClaim()}>
             <Text>Claim Your Prize</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.reset()}>
             <Text>Try Another Draw</Text>
          </TouchableOpacity>
          <Text style={{margin:20, alignSelf:'center',fontSize: 30}}>You Won ${this.props.store.state.prize}!</Text>

        </View>
      )
    }
  }
  
  MyButtonComponent = store.connect(MyButtonComponent)

  export default MyButtonComponent