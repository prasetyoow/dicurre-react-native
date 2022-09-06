import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    // Header
    <>
      {/* // Header */}
      <ScrollView>
        <View style={styles.containerTop}>
          <Text style={styles.topLogo}>Zwallet</Text>
        </View>
        {/* // Content */}
        <View style={styles.containerContent}>
          <Text style={styles.contentHead}>Sign Up</Text>
          <Text style={styles.contentMuted}>
            Create your account to access Zwallet.
          </Text>
          <View style={styles.inputCustom}>
            <CustomInput placeholder="Enter your username" icon="user" />
            <CustomInput placeholder="Enter your e-mail" icon="envelope" />
            <CustomInput
              placeholder="Enter your password"
              icon="lock"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => navigation.navigate('CreatePIN')}>
            <Text style={styles.textButton}>Signup</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>
            Already have an account?{' '}
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={styles.signupLink}>Let's Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
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

export default SignupScreen;
