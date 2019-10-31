import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import imagePicker from './imagePicker' 
import imageEditor from './imageEditor' 

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  mainContent: {
    flex: 1,
  },
});

const screens = {
  Editor: imageEditor,
  Picker: imagePicker,
}

const navigation = createStackNavigator(screens, {initialRouteName: 'Picker', headerMode: 'none'})
const NavigationContainer = createAppContainer(navigation)

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <NavigationContainer />
        </View>
      </View>   
    );
  }
}