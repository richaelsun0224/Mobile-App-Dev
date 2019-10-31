import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import store from './store'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   width: '80vw',
   paddingTop: 22,
   bottom: 20,
   color: 'black',
   justifyContent: 'space-evenly',
   alignItems: 'center'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
  },
})

class MyLabelComponent extends React.Component {
    render() {
      return (
        <View>
          <View style={{textAlign: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>
              { this.props.store.state.status 
                ? ''
                : <Text>Please Pick 6 Numbers (1 ~ 40):</Text>
              }
            </Text>
          </View>
          <View style={styles.container}>
            <FlatList
              data={this.props.store.state.list}
              contentContainerStyle={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center'}}
              renderItem={({item, i}) => <Text style={styles.item}>{item}</Text>}
            />
          </View>
          <View style={{textAlign: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>
              Lotto Numbers:
            </Text>
          </View>
          <View style={styles.container}>
            <FlatList
              data={this.props.store.state.lottoList}
              contentContainerStyle={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center'}}
              renderItem={({item, i}) => <Text style={styles.item}>{item}</Text>}
            />
          </View>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyLabelComponent = store.connect(MyLabelComponent)

  export default MyLabelComponent