import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// components
import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (email === 'admin@mail.com' && password === 'admin') {
      Alert.alert('Success', 'Login Success');
      // navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Error', 'Not Registered, please register. Redirecting...');
      navigation.navigate('Home');
    }
  };

  return (
    // Header
    <>
      {/* // Header */}
      <View style={styles.containerTop}>
        <Text style={styles.topLogo}>Zwallet</Text>
      </View>
      {/* // Content */}
      <View style={styles.containerContent}>
        <Text style={styles.contentHead}>Login</Text>
        <Text style={styles.contentMuted}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
        <View style={styles.inputCustom}>
          <CustomInput
            placeholder="Enter your e-mail"
            icon="envelope"
            type="email-address"
          />
          <CustomInput
            placeholder="Enter your password"
            icon="lock"
            secure={true}
            type=""
          />
        </View>
        <TouchableOpacity onPress={() => navigation.push('ForgotPass')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerButton} onPress={onLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        {/* <CustomButton text="Login" onPress={onLogin} /> */}
        <Text style={styles.footer}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.push('Signup')}>
            <Text style={styles.signupLink}>Let's Sign Up</Text>
          </TouchableOpacity>
        </Text>
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
    marginTop: 30,
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
  signupLink: {
    color: '#2F3163',
  },
  forgot: {
    marginRight: 10,
    marginBottom: 20,
    textAlign: 'right',
  },
  footer: {
    textAlign: 'center',
    margin: 50,
  },
});

export default LoginScreen;
