import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 15,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CustomButton;
