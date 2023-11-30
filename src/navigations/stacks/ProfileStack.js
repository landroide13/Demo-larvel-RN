import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Profile'
import ChangePassword from '../../screens/ChangePassword'

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="ProfileStack" 
            component={Profile}
            options={{
                title: '',
                headerShown: false
            }} />
        <Stack.Screen 
            name="ChangePassword" 
            component={ChangePassword}
            options={{
                headerBackTitle: '',
                title: '',
                headerShown: false
            }} />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})