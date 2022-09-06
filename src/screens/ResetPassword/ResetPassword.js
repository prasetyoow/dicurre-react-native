import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';

const ResetPassWord = () => {
  const navigation = useNavigation();
  return (
    // Header
    <>
      {/* // Header */}
      <View style={styles.containerTop}>
        <Text style={styles.topLogo}>Zwallet</Text>
      </View>
      {/* // Content */}
      <View style={styles.containerContent}>
        <Text style={styles.contentHead}>Reset Password</Text>
        <Text style={styles.contentMuted}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={styles.inputCustom}>
          <CustomInput placeholder="Enter your e-mail" icon="envelope" />
        </View>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('NewPassword')}>
          <Text style={styles.textButton}>Confirm</Text>
        </TouchableOpacity>
        <View style={styles.horizontal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: 'rgba(99, 121, 244, 0.2)',
    alignItems: 'center',
    padding: 80,
  },
  topLogo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#6379F4',
  },
  containerContent: {
    backgroundColor: 'white',
    width: 415,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentHead: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 24,
    fontWeight: '700',
    color: '#3A3D42',
  },
  contentMuted: {
    marginTop: 20,
    paddingHorizontal: 40,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    color: 'rgba(58, 61, 66, 0.6)',
  },
  inputCustom: {
    paddingHorizontal: 10,
    marginTop: 30,
    paddingBottom: 225,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 15,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  horizontal: {
    marginTop: 50,
    borderBottomColor: 'black',
    width: 134,
    height: 1,
  },
});

export default ResetPassWord;
