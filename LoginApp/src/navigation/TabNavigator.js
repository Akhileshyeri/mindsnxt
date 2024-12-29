import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { Button } from 'react-native-paper';


const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'account';
          else if (route.name === 'Notifications') iconName = 'bell';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'grey',
        headerRight: () => (
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: 'red',
              paddingVertical: 10,
              borderRadius: 5,
            }}
            labelStyle={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Logout
          </Button>

        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}
