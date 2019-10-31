import React from 'react';
import { Text, Image, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

class imageEditor extends React.Component {
    render() {
        const {navigation} = this.props
        const image = navigation.getParam('image')

        return (
            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 24, lineHeight: 30, fontWeight: 'bold', textAlign: 'center'}}>Image Editor</Text>
                <Image style={{width:300, height: 200, margin: 20}} source={image} />
                <Button title="Choose another image" onPress={() => navigation.goBack()}/>
                <Button title="Cropping Image"/>
                <Button title="Add Filters"/>
            </View>
        );
    }    

}

export default imageEditor