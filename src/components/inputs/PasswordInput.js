import {StyleSheet, View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import React from 'react'
import { Controller } from 'react-hook-form'

const PasswordInput = ({ name, control, errors, inputStyle, errorValidationStyle, secureEntry, toggleSecuryEntry }) => {

  return (
    <>
      <Controller 
        control={control} 
        rules= {{ required: true,  minLength: 4, maxLength: 8 }}
        render={({ field: { onChange, onBlur, value }}) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={inputStyle}
            placeholderTextColor='black'
            leftIcon={
              <Icon name='key' type='ionicon' size={24} color={'black'} />
            }
            rightIcon={
              <Icon name='eye' type='ionicon' size={24} color={'black'} onPress={toggleSecuryEntry} />
            }
            secureTextEntry={secureEntry}
          />
        )} 
        name={name} />

        {errors[name]?.type === 'required' && <Text style={errorValidationStyle}>Field Required</Text> }
        {errors[name]?.type === 'minLength' && <Text style={errorValidationStyle}>Password too short</Text> }
        {errors[name]?.type === 'maxLength' && <Text style={errorValidationStyle}>Password too long</Text> }
    </>
  )
}

export default PasswordInput

const styles = StyleSheet.create({})