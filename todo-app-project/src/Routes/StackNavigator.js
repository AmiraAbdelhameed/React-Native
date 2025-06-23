import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./Router";
import Home from '../pages/Home';
import TodoDetails from '../pages/TodoDetails';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={PATHS.HOME} component={Home} />
            <Stack.Screen name={PATHS.DETAILS} component={TodoDetails} />
        </Stack.Navigator>
    )
}

export default StackNavigator
