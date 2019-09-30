import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoList from './TodoList' 
import TodoDetails from './TodoDetails'

const styles = StyleSheet.create({  
  text: {
    fontFamily: 'Cochin',
    color: '#FFFFFF',
    textTransform: 'capitalize'
  },

  block: {
      height: 100
  },

  header: {
      top: 65,
      height: 150,
      backgroundImage: `url(${"./img/bg_img.gif"})`,
      backgroundSize: 'cover',
      flexDirection: 'row',
      alignItems: 'stretch'
  },

  mainContent: {
      flex: 1,
      justifyContent: "space-evenly"
  },

  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: 'lightgray'
  },

  headerText: {
    height: '100%',
    width: '100%',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    paddingTop: 45
  },

  title: {
    fontSize: 28,
    fontFamily: 'Arial-BoldMT',
    textTransform: 'uppercase',
  },

  date: {
    fontSize: 18,
  }
});

const screens = {
  Details: TodoDetails,
  List: TodoList,
}

const navigation = createStackNavigator(screens, {initialRouteName: 'List'})
const NavigationContainer = createAppContainer(navigation)


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var day = new Date().getDay(); //Current Seconds
    var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    that.setState({
      date:
        date + '/' + month + '/' + year + ' ' + dayList[day],
    });
  }

  render (){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            <Text style={styles.title}>
              Richael's To Do App{"\n"}
            </Text>
            <Text style={styles.date}>
              {this.state.date}
            </Text>
          </Text>
        </View>
        <View style={styles.mainContent}>
          <NavigationContainer />
        </View>
      </View>
    );
  }
}