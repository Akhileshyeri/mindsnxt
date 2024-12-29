import React from 'react';
import { View, Text } from 'react-native';
import styles from '../utils/styles';

export default function NotificationsScreen() {
  return (
     <View style={styles.container}>
          <Text style={styles.title}>Here are your Notifications!</Text>
        </View>
  );
}
