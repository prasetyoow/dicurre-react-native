import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// components
import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';

// redux
import {login} from '../../redux/asyncActions/auth';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = {
    email,
    password,
  };

  const onLogin = () => {
    // dispatch(login(data));
    navigation.navigate('HomeTab');
  };

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
          <Text style={styles.contentHead}>Login</Text>
          <Text style={styles.contentMuted}>
            Login to your existing account to access all the features in
            Zwallet.
          </Text>
          <View style={styles.inputCustom}>
            <CustomInput
              placeholder="Enter your e-mail"
              onChange={text => setEmail(text)}
              icon="envelope"
              type="email-address"
              value={email}
            />
            <CustomInput
              placeholder="Enter your password"
              onChange={text => setPassword(text)}
              icon="lock"
              secure={true}
              type="email-address"
              value={password}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerButton} onPress={onLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          {/* <CustomButton text="Login" onPress={onLogin} /> */}
          <Text style={styles.footer}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>Let's Sign Up</Text>
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
