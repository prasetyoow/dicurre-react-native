import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <View style={styles.iconCenter}>
          <View style={styles.iconContainer}>
            <Icon name="check" size={40} color="white" />
          </View>
        </View>
        <Text style={styles.contentHead}>PIN Successfully Created</Text>
        <Text style={styles.contentMuted}>
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </Text>
        {/* <CodePin number={6} /> */}
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.push('Login')}>
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
    padding: 150,
  },
  topLogo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#6379F4',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#1EC15F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCenter: {
    margin: 30,
    alignItems: 'center',
  },
  containerContent: {
    backgroundColor: 'white',
    width: 415,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentHead: {
    textAlign: 'center',
    margin: 30,
    fontSize: 24,
    fontWeight: '700',
    color: '#3A3D42',
  },
  contentMuted: {
    margin: 25,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    color: 'rgba(58, 61, 66, 0.6)',
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

export default CreatePinScreen;
