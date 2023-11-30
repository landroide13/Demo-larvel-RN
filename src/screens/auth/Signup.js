import { View } from 'react-native'
import styles from '../../styles/Auth'
import React, { useState } from 'react'
import { Text, Button, Image } from 'react-native-elements'
import Toast from 'react-native-root-toast'
import { ErrorsText, ActivityLoader } from '../../components/Shared'
import { useForm } from 'react-hook-form'
import EmailInput from '../../components/inputs/EmailInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import TextInput from '../../components/inputs/TextInput'

import { signup } from '../../services/AuthService'

const Signup = ({ navigation }) => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [secureEntry, setSecureEntry] = useState(true)
    const { control, handleSubmit, formState:{ errors } } = useForm()

    const _signup = async(data) =>{

        try {

            setLoading(true)
            const message = await signup(data)
            await navigation.navigate('Login')
            Toast.show(
                message,
                {}
            )
            
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }

    }

    const toggleSecureEntry = () =>{
        setSecureEntry(!setSecureEntry)
    }

    return (
        <View  style={ styles.container }>

            { loading ? <ActivityLoader /> : null}

            <Image 
                style={{ width: 100, height: 100, marginBottom: 20 }} 
                source={require('../../../assets/icon.png')} />

            <ErrorsText error={error} />

            <Text h3 style={ styles.title }>Register</Text>

            <TextInput
                name='name'
                minLength={2}
                maxLength={30}
                iconName='person-outline'
                control={control}
                errors={errors}
                errorValidationStyle={styles.erroValidation} 
                inputStyle={styles.input}
            />

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

            <PasswordInput
                name='passwordConfirmation'
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
                title='Register'
                type='outline'
                onPress={handleSubmit(_signup)}
            />

            <Text 
                style={styles.link} 
                onPress={() => navigation.navigate('Login')}>Login</Text>

        </View>
      )
}

export default Signup
