import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import screen :
import LoginScreen from './screen/LoginScreen';
import DashboardScreen from './screen/DashboardScreen';
import ProfileScreen from './screen/ProfileScreen';
import SettingScreen from './screen/SettingScreen';
import PartAScreen from './screen/PartAScreen';
import PartBScreen from './screen/PartBScreen';
import VoterListScreen from './screen/VoterListScreen';
import UpdateVoterScreen from './screen/UpdateVoterScreen';
import VoterFilterScreen from './screen/VoterFilterScreen';
import ViewVoterScreen from './screen/ViewVoterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

export function InnerStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
         <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown:false}}
            />
        <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="PartAScreen"
            component={PartAScreen}
            options={{headerTitle: 'Home > Part A', headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
         <Stack.Screen
            name="PartBScreen"
            component={PartBScreen}
            options={{headerTitle: 'Home > Part B',headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
         <Stack.Screen
            name="VoterFilterScreen"
            component={VoterFilterScreen}
            options={{headerTitle: 'Home > Voter List',headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
        <Stack.Screen
            name="ViewVoterScreen"
            component={ViewVoterScreen}
            options={{headerTitle: 'Home > Voter Details',headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
        <Stack.Screen
            name="VoterListScreen"
            component={VoterListScreen}
            options={{headerTitle: 'Home > Voter List',headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
         <Stack.Screen
            name="UpdateVoterScreen"
            component={UpdateVoterScreen}
            options={{headerTitle: 'Home > Update Voter',headerTitleStyle:{fontSize:14}, headerTransparent: true, headerTintColor:'#FFFFFF'}}
        />
       
    </Stack.Navigator>
)
}

export const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#288BC6',
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
         <Tab.Screen 
        name="ProfileScreen" 
        component={ProfileScreen}
        options={{
            headerShown:false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              ),
           
          }}
        />
         <Tab.Screen 
        name="SettingScreen" 
        component={SettingScreen}
        options={{
            headerShown:false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <Icon name="cog" color={color} size={size} />
              ),
           
          }}
        />
      </Tab.Navigator>
    )
  }

