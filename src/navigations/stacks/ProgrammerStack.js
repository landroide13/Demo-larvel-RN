import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Programmers from '../../screens/Programmers'

const Stack = createNativeStackNavigator();

const ProgrammerStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="ProgrammerStack" 
            component={Programmers}
            options={{
                title: '',
                headerShown: false
            }} />
    </Stack.Navigator>
  )
}

export default ProgrammerStack

const styles = StyleSheet.create({})