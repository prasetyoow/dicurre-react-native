import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';

import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// redux
import {login} from '../../redux/asyncActions/auth';
import {useDispatch, useSelector} from 'react-redux';

// components
import CustomInput from '../../components/CustomInput';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const LoginForm = ({errors, handleChange, handleSubmit, navigation}) => {
  return (
    <>
      <View style={styles.formikWrap}>
        <View style={styles.inputCustom}>
          <CustomInput
            placeholder="Enter your e-mail"
            onChange={handleChange}
            icon="envelope"
            type="email-address"
            name="email"
          />
          {errors.email ? (
            <Text style={styles.dangerForm}>
              <ErrorMessage name="email" />
            </Text>
          ) : null}
          <CustomInput
            placeholder="Enter your password"
            onChange={handleChange}
            icon="lock"
            secure={true}
            type="text"
            name="password"
          />
          {errors.password ? (
            <Text style={styles.dangerForm}>
              <ErrorMessage name="password" />
            </Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerButton} onPress={handleSubmit}>
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
    </>
  );
};

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth?.token);
  // const errorMsg = useSelector(state => state.auth.errorMsg);
  // const successMsg = useSelector(state => state.auth.successMsg);
  const onLogin = value => {
    const data = {email: value.email, password: value.password};
    dispatch(login(data));
  };

  React.useEffect(() => {
    if (token) {
      navigation.navigate('HomeTab');
    }
  }, [navigation, token]);

  return (
    <>
      {/* // Header */}
      {/* {successMsg && <Text style={styles.errorMessage}>{successMsg}</Text>}
      {errorMsg && <Text style={styles.errorMessage}>{errorMsg}</Text>} */}
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
        </View>
        <Formik
          validationSchema={loginSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={onLogin}>
          {props => <LoginForm {...props} navigation={navigation} />}
        </Formik>
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
  formikWrap: {
    backgroundColor: 'white',
  },
  errorMessage: {
    height: 40,
    fontSize: 18,
    backgroundColor: '#FF5B37',
    color: '#2C3333',
    textAlign: 'center',
  },
  dangerForm: {
    paddingLeft: 10,
    color: '#FF5B37',
  },
});

export default LoginScreen;
