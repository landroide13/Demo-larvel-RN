import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

const ChangePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.text}>Change Password</Text>
        </View>
    </SafeAreaView>
  )
}

export default ChangePassword

const styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$appBg',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: '$primary',
        fontWeight: '$fontWeight600',
        fontSize: '$font24'
    },
})