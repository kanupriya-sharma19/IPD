import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Check if the token exists before removing it
      const token = await AsyncStorage.getItem('authToken');
      console.log('Token before logout:', token);
  
      await AsyncStorage.removeItem('authToken');
      Alert.alert('Logged out', 'You have been logged out successfully.');
  
      // Navigate to login screen
      navigation.replace('login'); // Ensure 'login' screen exists in your navigation
  
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: '#ff4d00',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: '#fff' }}>Logout</Text>
      </TouchableOpacity>
          <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Text style={styles.loginText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
loginButton: {
  backgroundColor: '#ff4d00',
  borderRadius: 25,
  paddingVertical: 15,
  paddingHorizontal: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 5,
  marginBottom: 20,
},
loginText: {
  color: '#000',
  fontSize: 20,
  fontWeight: '500',
  letterSpacing: 2,
}})

export default HomeScreen;
