import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../../components/CustomInput';

const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Change Password</Text>
      </View>

      <Text style={styles.textMuted}>
        You must enter your current password and then type your new password
        twice.
      </Text>

      <View style={styles.formChange}>
        <CustomInput
          placeholder="Current Password"
          icon="lock"
          secure={true}
          type="text"
        />
        <CustomInput
          placeholder="New Password"
          icon="lock"
          secure={true}
          type="text"
        />
        <CustomInput
          placeholder="Repeat Password"
          icon="lock"
          secure={true}
          type="text"
        />
      </View>

      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.textButton}>Change Password</Text>
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
  formChange: {
    padding: 15,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 15,
    marginLeft: 20,
    marginTop: 170,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChangePassword;
