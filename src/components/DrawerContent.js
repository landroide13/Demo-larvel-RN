import React,{ useState, useEffect } from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import { logout } from "../services/AuthService";
import { useAuth, USER_KEY } from "../providers/AuthProvider";
import * as SecureStore from 'expo-secure-store';
import Toast from "react-native-root-toast";


export default DrawerContent = (props) => {

    const [ user, setUser ] = useState([]);

    useEffect(() => {
        (async() =>{
            const _user = await SecureStore.getItemAsync(USER_KEY)
            setUser(JSON.parse(_user))
        })();
    }, [])

    const { handleLogout } = useAuth();

    const _logout = async () =>{

        try {

            await logout();
            await handleLogout();
            Toast.show('Session closed.')
            
        } catch (error) {
            Toast.show(error.message)
        }

    }

    return(
        <View style={ styles.DrawerContent }>
            <DrawerContentScrollView  { ...props }>
                <View style={ styles.DrawerContent }>
                    <View style={ styles.userInfo }>
                        <View style={{  marginTop: 15 }}>
                            <Avatar rounded size="medium" source={require('../../assets/favicon.png')}/>
                            { user && 
                                <View style={{ marginLeft: 15, marginTop: 15 }}>
                                    <Text style={ styles.title }> { user.name }</Text>
                                    <Text style={ styles.subTitle }> { user.email }</Text>
                                </View>
                            }
                        </View>    
                    </View>
                    <View style={styles.drawerItem}>
                            <DrawerItem
                                labelStyle={styles.label} 
                                label='Start' 
                                onPress={() => props.navigation.navigate('Programmers')}
                                icon={({ color, size }) => (
                                    <Icon name='home' color={color} size={size} type="ionicon" />
                                )}
                            />
                    </View>
                    <View style={styles.drawerItem}>
                            <DrawerItem
                                labelStyle={styles.label} 
                                label='Account' 
                                onPress={() => props.navigation.navigate('Account')}
                                icon={({ color, size }) => (
                                    <Icon name='person-outline' color={color} size={size} type="ionicon" />
                                )}
                            />
                    </View>
                </View>
            </DrawerContentScrollView>

            <View style={ styles.bottomDrawerItem }>
                <DrawerItem 
                    label="Logout" 
                    onPress={() => _logout()}
                    labelStyle={styles.label}
                    icon={({ color, size }) => (
                        <Icon name='exit-outline' color={color} size={size} type="ionicon" />
                    )}
                />
            </View>

        </View>
    )

}


const styles = EStyleSheet.create({

    drawerContent:{
        flex: 1
    },

    userInfo:{
        paddingLeft: 20
    },

    title:{
        marginTop: 3,
        fontSize: '$font16',
        fontFamily: '$700Bold',
        fontWeight: 'bold'
    },

    subTitle:{
        fontSize: '$font14',
        fontFamily: '$400Regular',
        lineWeight: 14
    },

    drawerItem:{
        marginTop: 15
    },

    label:{
        fontFamily:  '$400Regular',
    },

    bottomDrawerItem:{
        marginBottom: 10,
        borderTopColor: '#ddd5d5',
        borderTopWidth: 1
    }
})











