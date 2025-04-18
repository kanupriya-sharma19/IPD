// Input.js
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const Input = ({ placeholder, value, onChangeText, style, secureTextEntry, errorMessage }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 8,
  },
  input: {
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
