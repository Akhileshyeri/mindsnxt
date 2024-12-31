import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '', // Removes the title text
          headerBackVisible: false, // No back button on Login screen (initial route)
        }}
      />

      {/* Signup Screen */}
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: '', // Removes the title text
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: '', // Removes the title text
        }}
      />

      {/* Main Screen (Tab Navigator) */}
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }} // Hides header for Main screen
      />
    </Stack.Navigator>
  );
}
