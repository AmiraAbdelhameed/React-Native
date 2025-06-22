import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 

const Tab = createBottomTabNavigator();

export const PATHS = {
    HOME: "Home Page",
    COMPLETED_TASKS: "Completed Tasks",
    DETAILS: "Todo Details",
};

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={PATHS.HOME} component={StackNavigator} options={{
                    headerBackTitle: "Back",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }} />
                <Tab.Screen
                    name={PATHS.COMPLETED_TASKS}
                    component={CompletedTasks}
                    options={{
                        headerShown: false,
                        headerBackTitle: "Back",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="tasks" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Router;
