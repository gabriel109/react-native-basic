import React from 'react';
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, SignIn } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    const auth = useSelector(state => state.auth)
    return (
        <Stack.Navigator initialRouteName="SignIn">
            {auth.loggedIn ? (
                <Stack.Screen name="Home" component={HomeStack} />
            ) : (
                    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                )}
        </Stack.Navigator>
    );
}

function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={SignIn} />
        </Tab.Navigator>
    );
}

export default AuthStack;