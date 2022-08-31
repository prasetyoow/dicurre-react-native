import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// components
// import CustomButton from '../../components/CustomButton';
// import CodePin from 'react-native-pin-code';

const CreatePinScreen = () => {
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
        <Text style={styles.contentHead}>Create Security PIN</Text>
        <Text style={styles.contentMuted}>
          Create a PIN that's contain 6 digits number for security purpose in
          Zwallet.
        </Text>
        {/* <CodePin number={6} /> */}
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.push('CreatePINSuccess')}>
          <Text style={styles.textButton}>Confirm</Text>
        </TouchableOpacity>
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
  button: {
    margin: 50,
  },
  footer: {
    textAlign: 'center',
    margin: 50,
  },
});

export default CreatePinScreen;
