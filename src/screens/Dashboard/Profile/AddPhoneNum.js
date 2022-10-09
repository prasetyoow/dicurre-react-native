import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const AddPhoneNum = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Add Phone Number</Text>
      </View>

      <Text style={styles.textMuted}>
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </Text>

      <View style={styles.textInputFlex}>
        <Icon
          style={styles.iconForm}
          name="phone"
          size={24}
          color="#A9A9A999"
        />
        <Text style={styles.textForm}>+62</Text>
        <TextInput placeholder="Enter your phone number" />
      </View>

      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>
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
  textInputFlex: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 2,
  },
  iconForm: {
    padding: 15,
  },
  textForm: {
    paddingTop: 15,
    marginRight: 10,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddPhoneNum;
