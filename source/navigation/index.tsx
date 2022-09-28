import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActionHelpers } from '@react-navigation/native';
import {
    Home,
    CountryDetails,
    WeatherDetails
} from '../screens';
import { RootStackParamList } from '../utilities/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CountryDetails" component={CountryDetails} />
            <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
        </Stack.Navigator>
    )
}

export default RootNavigator;