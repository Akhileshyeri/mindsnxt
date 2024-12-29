import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from '../utils/styles';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError('Please fill out both email and password.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Signup</Text>
          <TextInput
            value={email}
            mode="outlined"
            onChangeText={setEmail}
            left={<TextInput.Icon name="email" />}
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            value={password}
            mode="outlined"
            secureTextEntry
            onChangeText={setPassword}
            left={<TextInput.Icon name="lock" />}
            style={styles.input}
            placeholder="Password"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Signup
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
