// REACT
import React from 'react';
import { Button, View, } from 'react-native';

// COMPONENTS
import Typography from '../components';

// REDUX
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

function HomeScreen() {
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Home</Typography>
            <Button
                onPress={() => dispatch(logout())}
                title="Logout"
                color="#841584"
            />
        </View>
    );
}

export default HomeScreen;