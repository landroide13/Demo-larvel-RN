import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Text } from 'react-native-elements'
import EStyleSheet from 'react-native-extended-stylesheet';

export const ErrorsText = ({ error }) => {
    return (
        <Text style={styles.errorText}>{ error }</Text>
    )
  }

export const ActivityLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
      <ActivityIndicator color="#f29866" size="large" />
    </View>
  )
}


const styles = EStyleSheet.create({
    errorText:{
        marginBottom: 0,
        color: '$red',
        fontFamily: '$400Regular',
        fontSize: '$font14'
    }
})