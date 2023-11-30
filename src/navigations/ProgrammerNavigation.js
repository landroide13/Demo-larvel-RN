import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  {createDrawerNavigator} from '@react-navigation/drawer'

import DrawerContent from '../components/DrawerContent'
import { Icon } from 'react-native-elements'
import EStyleSheet from 'react-native-extended-stylesheet'
import Constants from 'expo-constants'
import ProgrammerStack from './stacks/ProgrammerStack'
import ProfileStack from './stacks/ProfileStack'

const BottonTabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

const TabBar = ({ name }) => {
    return(
        <BottonTabs.Navigator
            initialRouteName='Programmers'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused }) => showIcons(route, focused),
                headerRight:() => menuIcon(navigation), 
                tabBarStyle: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    alignItems: 'center',
                    backgroundColor: styles.tabStyles.backgroundColor,
                    paddingTop: 5,
                    position: 'absolute',
                    overflow: 'hidden'
                }
            })}
        >
            <BottonTabs.Screen 
                name="Programmers" 
                component={ProgrammerStack}
                options={{
                    title: '',
                    headerTitle: name,
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyles,
                    headerTintColor: styles.header.color,
                    headerTitleStyle:{
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: styles.header.fontSize,
                    }
                }} />
            <BottonTabs.Screen 
                name="Account"
                component={ProfileStack}
                options={{
                    title: '',
                    headerTitle: name,
                    headerTitleAlign: 'center',
                    headerStyle: styles.headerStyles,
                    headerTintColor: styles.header.color,
                    headerTitleStyle:{
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: styles.header.fontSize,
                    }
                }} />
        </BottonTabs.Navigator>
    )
}

TabBar.defaultProps = {
    name: Constants.expoConfig.name
}

const showIcons = (route, focused) =>{
    let icon = ''

    switch(route.name){
        case 'Programmers':{
            icon = "home"
            break;
        }
        case 'Account':{
            icon = "person-outline"
            break;  
        }  
    }

    return <Icon name={icon} type='ionicon'
                 color={ focused ? "#2570E3" : 'white' } 
                 style={{ marginTop: 2 }}/>
}

const menuIcon = (navigation) =>{
    return(
        <Icon name='menu'
             type='ionicon' 
             size={30} 
             color='white'  
             style={{ marginTop: 2, marginRight: 10 }}
             onPress={() => navigation.toggleDrawer()}
            />
    )
}

const ProgrammerNavigation = () => {
  return(
    <Drawer.Navigator
        drawerContent={ (props) => <DrawerContent {...props}  />} 
        screenOptions={{
            headerShown: false
        }}
        >
            <Drawer.Screen name='BottonTabs' component={TabBar}/>
    </Drawer.Navigator>
  ) 
}

export default ProgrammerNavigation

const styles = EStyleSheet.create({
    tabStyles:{
        backgroundColor: '$black'
    },

    headerStyles:{
        backgroundColor: '$primary',
        shadowColor: '$primary'
    },

    header:{
        color: '$white',
        fontFamily: '$700Bold',
        fontSize: '$font22'
    },
})