import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { logout } from '../redux/actions';

function HomeScreen() {
    const dispatch = useDispatch();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home</Text>
            <Button
                onPress={() => dispatch(logout())}
                title="Logout"
                color="#841584"
            />
        </View>
    );
}

export default HomeScreen;