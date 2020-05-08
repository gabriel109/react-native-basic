import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { login } from '../redux/actions';
import styles from '../styles/Signin.js';

function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TextInput  
                placeholder="Email..." 
                style={styles.input}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                secureTextEntry
                placeholder="Contraseña..."
                style={styles.input}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => dispatch(login(email, password))}>
                <Text>Ingresar</Text>
            </TouchableOpacity>
            {auth.msgError &&
                <Text>{auth.msgError}</Text>
            }            
        </View>
    );
}

export default SigninScreen;