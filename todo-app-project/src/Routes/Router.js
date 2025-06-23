import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import Home from "../pages/Home";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from "react-native/Libraries/NewAppScreen";
export const PATHS = {
      HOME: 'Home page',
      COMPLETED_TASKS: 'completed tasks',
    DETAILS: 'Todo Details'
  }
const Router = () => {
    const Tab = createBottomTabNavigator()
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerTitleStyle: {
                        color: "#5B3E90",
                    },
                    tabBarActiveTintColor: '#5B3E90',     
                      tabBarInactiveTintColor: '#999999'
                 
                }}>
                <Tab.Screen name={PATHS.HOME} component={StackNavigator} options={{
                    
                    tabBarIcon:()=>(
                        <Entypo name="home" size={24} color="#5B3E90" />
                    )
                }} />
                <Tab.Screen name={PATHS.COMPLETED_TASKS} component={CompletedTasks} options={{
                    tabBarIcon:()=>(
                        <FontAwesome5 name="tasks" size={24} color="#5B3E90" />
                    )
                }} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router
