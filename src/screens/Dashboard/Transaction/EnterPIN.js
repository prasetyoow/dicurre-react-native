import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const EnterPIN = () => {
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topTransferContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Enter Your PIN</Text>
      </View>

      <Text style={styles.textMuted}>
        Enter your 6 digits PIN for confirmation to continue transferring money.
      </Text>

      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.textButton}>Transfer Now</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  topTransferContainer: {
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
  },
  textTop: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '700',
    color: '#4D4B57',
  },
  textMuted: {
    padding: 15,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default EnterPIN;
