import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types/RootParamList';
import BottomTabNavigator from './BottomTabNavigator';
import { Settings } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="MainTabs"
                    component={BottomTabNavigator}
                // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ title: 'Settings' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;