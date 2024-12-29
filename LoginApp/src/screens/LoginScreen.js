import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../utils/styles';

export default function LoginScreen({ navigation }) {
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
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        value={email}
                        mode="outlined"
                        onChangeText={setEmail}
                        left={<TextInput.Icon name={() => <MaterialIcons name="email" size={24} color="gray" />} />}
                        style={styles.input}
                        placeholder="Email"
                        outlineColor="gray"
                        activeOutlineColor="#6200ee"
                    />
                    <TextInput
                        value={password}
                        mode="outlined"
                        onChangeText={setPassword}
                        secureTextEntry
                        left={<TextInput.Icon name={() => <MaterialIcons name="lock" size={24} color="gray" />} />}
                        style={styles.input}
                        placeholder="Password"
                        outlineColor="gray"
                        activeOutlineColor="#6200ee"
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <Button mode="contained" onPress={handleLogin} style={styles.button}>
                        Login
                    </Button>
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        Don't have an account? Sign Up
                    </Text>
                </Card.Content>
            </Card>
        </View>
    );
}
