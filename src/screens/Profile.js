import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button } from 'react-native-elements'

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={ styles.text }>Profile</Text>
            <Button 
                title='Change Password' 
                onPress={() => navigation.navigate('ChangePassword')}
                buttonStyle={styles.btn} />
        </View>
    </SafeAreaView>
  )
}

export default Profile

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

    btn:{
        backgroundColor: '$primary'
    }
})