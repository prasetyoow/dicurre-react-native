import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PersonalInfo = () => {
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Personal Information</Text>
      </View>

      <Text style={styles.textMuted}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>

      <View style={styles.dataHistoryContainer}>
        <Text style={styles.textMutedTransfer}>First Name</Text>
        <Text style={styles.textAmountTransfer}>Robert</Text>
      </View>

      <View style={styles.dataHistoryContainer}>
        <Text style={styles.textMutedTransfer}>Last Name</Text>
        <Text style={styles.textAmountTransfer}>Chandler</Text>
      </View>

      <View style={styles.dataHistoryContainer}>
        <Text style={styles.textMutedTransfer}>Verified E-mail</Text>
        <Text style={styles.textAmountTransfer}>pewdiepie1@gmail.com</Text>
      </View>

      <View style={styles.dataHistoryContainer}>
        <View>
          <Text style={styles.textMutedTransfer}>Phone Number</Text>
          <Text style={styles.textAmountTransfer}>+62 813-9387-7946</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topPersonalContainer: {
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
    marginTop: 15,
    padding: 15,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  dataHistoryContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  textMutedTransfer: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginBottom: 10,
  },
  textAmountTransfer: {
    fontSize: 22,
    fontWeight: '700',
    color: '#514F5B',
  },
});

export default PersonalInfo;
