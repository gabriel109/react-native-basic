import React from 'react';
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    const auth = useSelector(state => state.auth)
    return (
        <Stack.Navigator initialRouteName="Login">
            {auth.loggedIn ? (
                <Stack.Screen name="Home" component={HomeStack} />
            ) : (
                <Stack.Screen options={{headerShown: false}} name="Login" component={SigninScreen} />
            )}
        </Stack.Navigator>
    );
}

function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default AuthStack;