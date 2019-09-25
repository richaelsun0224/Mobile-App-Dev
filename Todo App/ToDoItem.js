import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
    items: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)',
        height: 60,
    },

    container: {
        fontSize: 20,
    },

    checked: {
        color: 'black',
    },

    unchecked: {
        color: 'rgb(220, 220, 220)',
        textDecorationLine: 'line-through'
    }
})

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: '',
          ifChecked: false
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
        that.setState({
          time:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
    }

    render() {
        return (
            <View style={styles.items}>
                <Text style={styles.container}>
                    <CheckBox 
                      checkedIcon='check-square-o'
                      uncheckedIcon='square-o'
                      checked={this.state.ifChecked}
                      onPress={() => this.setState({ifChecked: !this.state.ifChecked})}
                    />
                    <Text style={this.state.ifChecked ? styles.unchecked : styles.checked}>
                        {this.props.item} {' - '} {this.state.time}
                    </Text>
                </Text>
            </View>
        )
    }
}

export default ToDoItem;
