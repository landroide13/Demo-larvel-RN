import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EStyleSheet from 'react-native-extended-stylesheet'
import Constants  from 'expo-constants'
import Login from '../../screens/auth/Login'
import Signup from '../../screens/auth/Signup'

const Stack = createNativeStackNavigator()

const AuthStack = ({ name }) => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerBackTitle: '',
            headerShown: true,
            headerTitle: name,
            headerStyle: styles.headerStyle,
            headerShadowVisible: false,
            headerTintColor: styles.header.color,
            headerTitleStyle: {
                fontFamily: styles.header.fontFamily,
                fontWeight: styles.header.fontWeight,
                fontSize: styles.header.fontSize
            }
        }}
    >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

AuthStack.defaultProps = {
    name: Constants.expoConfig.name
}


const styles = EStyleSheet.create({
    headerStyle:{
        backgroundColor: '$authBg',
    },

    header:{
        fontSize: '$font28',
        color: '$primary',
        fontFamily: '$700Bold'
    },
})