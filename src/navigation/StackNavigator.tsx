import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types/RootParamList';
import BottomTabNavigator from './BottomTabNavigator';
import MovieDetail from '../screens/MovieDetail';
import VideoScreen from '../screens/VideoScreen';
import SeatBooking from '../screens/SeatBooking';
import SeatBookingDetail from '../screens/SeatBookingDetail';

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
                    name="MovieDetail"
                    component={MovieDetail}
                />
                <Stack.Screen
                    name="VideoScreen"
                    component={VideoScreen}
                />
                <Stack.Screen
                    name="SeatBooking"
                    component={SeatBooking}
                />
                <Stack.Screen
                    name="SeatBookingDetail"
                    component={SeatBookingDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;