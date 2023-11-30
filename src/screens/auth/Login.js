import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import styles from '../../styles/Auth'
import React, { useState } from 'react'
import { Text, Button, Image } from 'react-native-elements'
import Toast from 'react-native-root-toast'
import { ErrorsText, ActivityLoader } from '../../components/Shared'
import { useForm } from 'react-hook-form'
import EmailInput from '../../components/inputs/EmailInput'
import PasswordInput from '../../components/inputs/PasswordInput'

import { useAuth } from '../../providers/AuthProvider'
import { login } from '../../services/AuthService'

const Login = ({ navigation }) => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [secureEntry, setSecureEntry] = useState(true)
    const { control, handleSubmit, formState:{ errors } } = useForm()
    const { handleLogin } = useAuth()

    const _login = async(data) =>{
        try {
            setLoading(false)
            const res = await login(data)
            await handleLogin(res.data)
            Toast.show(
                res.message,
                {
                    position: Toast.positions.CENTER,
                }
            )
            
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const toggleSecureEntry = () =>{
        setSecureEntry(!setSecureEntry)
    }


  return (
    
    <View style={ styles.container }>

        { loading ? <ActivityLoader /> : null}

        <Image 
            style={{ width: 100, height: 100, marginBottom: 20 }} 
            source={require('../../../assets/icon.png')} />

         <Text h3 style={ styles.title }>Login</Text>    

        <ErrorsText error={error} />

        <EmailInput 
            name='email' 
            control={control} 
            errors={errors} 
            errorValidationStyle={styles.erroValidation} 
            inputStyle={styles.input}
         />

        <PasswordInput
            name='password'
            control={control}
            errors={errors}
            errorValidationStyle={styles.erroValidation} 
            inputStyle={styles.input}
            secureEntry={secureEntry}
            toggleSecuryEntry={toggleSecureEntry}
        />

        

        <Button 
            titleStyle={styles.buttonTitle} 
            buttonStyle={styles.button} 
            title='Login'
            type='outline'
            onPress={handleSubmit(_login)}
        />

        <Text 
            style={styles.link} 
            onPress={() => navigation.navigate('Signup')}>Create Account</Text>

    </View>
   
  )
}

export default Login

