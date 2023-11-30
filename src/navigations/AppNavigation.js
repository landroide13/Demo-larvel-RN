import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthNavigation from './AuthNavigation'
import AuthStack from './stacks/AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import ProgrammerNavigation from './ProgrammerNavigation'

const AppNavigation = ({ userToken }) => {
  return (
    <NavigationContainer >
        { userToken == null ? <AuthNavigation /> : <ProgrammerNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation
