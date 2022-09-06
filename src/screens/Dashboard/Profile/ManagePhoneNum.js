import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Xcon from 'react-native-vector-icons/Feather';

const ManagePhoneNum = () => {
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Manage Phone Number</Text>
      </View>

      <Text style={styles.textMuted}>
        You can only delete the phone number and then you must add another phone
        number.
      </Text>

      <View style={styles.dataHistoryContainer}>
        <View style={styles.flexContainer}>
          <View style={styles.textFlex}>
            <Text style={styles.textMutedTransfer}>Phone Number</Text>
            <Text style={styles.textAmountTransfer}>+62 813-9387-7946</Text>
          </View>
          <Xcon
            style={styles.iconTrash}
            name="trash"
            size={28}
            color="#BBBBBE"
          />
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
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFlex: {
    flexDirection: 'column',
  },
  iconTrash: {
    marginTop: 20,
  },
});

export default ManagePhoneNum;
