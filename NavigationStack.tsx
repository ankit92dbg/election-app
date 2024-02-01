import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import screen :
import LoginScreen from './screen/LoginScreen';
import DashboardScreen from './screen/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}

export const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
        initialRouteName="DashboardScreen"
      >
        <Tab.Screen 
        name="DashboardScreen" 
        component={DashboardScreen}
        options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
           
          }}
        />
      </Tab.Navigator>
    )
  }

