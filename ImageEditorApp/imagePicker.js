import * as React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    padding: 5,
    backgroundImage: 'url("img/BG.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  btnGroup: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  btn: { 
    flex: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
    textAlign: 'center', 
    justifyContent: 'center', 
    alignItems: 'center'  
  },

  btnText: {
    color: 'black',
    fontSize: 20
  },

  imgBox: {
    flex: 4,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },

  img: {
    width: 300,
    height: 200,
  }
});

class imagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            disabled: true,
        }
    };

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
                alert('Sorry, we need camera permissions to make this work!');
            }
        }
    }

    getPermissionAsync2 = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _takePhoto = async () => {
        this.getPermissionAsync();
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri, disabled: false });
            this.props.navigation.navigate('Editor', { image: result.uri })
        }  
    }

    _pickImage = async () => {
        this.getPermissionAsync2();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri, disabled: false });
            this.props.navigation.navigate('Editor', { image: result.uri })
        }
    }

    render() {
        let { image } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <Text style={{color: 'white', fontSize: 30, lineHeight: 45, fontWeight: 'bold', textAlign: 'center'}}>
                        START TO EDIT{'\n'}YOUR PHOTO NOW!
                    </Text>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.btn} onPress={this._takePhoto}>
                        <Text style={styles.btnText}>CAMERA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this._pickImage}>
                        <Text style={styles.btnText}>GALLERY</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.btn} disabled={this.state.disabled}>
                        <Text style={styles.btnText}>MY COLLECTION</Text>
                    </TouchableOpacity>
                </View>
            </View>   
        );
    }
}

export default imagePicker