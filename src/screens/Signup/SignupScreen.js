import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {Formik} from 'formik';

// components
import {PRIMARY_COLOR} from '../../assets/styles/coloring';
import CustomInput from '../../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/asyncActions/auth';
import {setTempEmail} from '../../redux/reducers/auth';
// import CustomButton from '../../components/CustomButton';

const signUpSchema = Yup.object().shape({
  username: Yup.string().min(6).required('Required'),
  email: Yup.string()
    .email('Invalid email address format')
    .required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const AuthValid = ({errors, handleChange, handleSubmit}) => {
  return (
    <>
      <View style={styles.inputCustom}>
        <CustomInput
          placeholder="Enter your username"
          icon="user"
          type="email-address"
          name="username"
          onChange={handleChange}
        />
        <CustomInput
          placeholder="Enter your e-mail"
          icon="envelope"
          type="email-address"
          name="email"
          onChange={handleChange}
        />
        <CustomInput
          placeholder="Enter your password"
          icon="lock"
          type="text"
          name="password"
          secure={true}
          onChange={handleChange}
        />
      </View>
      <TouchableOpacity style={styles.containerButton} onPress={handleSubmit}>
        <Text style={styles.textButton}>Signup</Text>
      </TouchableOpacity>
    </>
  );
};

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const successMsg = useSelector(state => state.auth.successMsg);
  const onSignup = value => {
    const data = {
      username: value.username,
      email: value.email,
      password: value.password,
    };
    // console.log(value);
    dispatch(register(data));
    dispatch(setTempEmail(value.email));
  };

  React.useEffect(() => {
    if (successMsg) {
      navigation.navigate('CreatePIN');
    }
  });
  return (
    // Header
    <>
      {/* // Header */}
      <ScrollView>
        <View style={styles.containerTop}>
          <Text style={styles.topLogo}>Dicurre</Text>
        </View>
        {/* // Content */}
        <View style={styles.containerContent}>
          <Text style={styles.contentHead}>Sign Up</Text>
          <Text style={styles.contentMuted}>
            Create your account to access Zwallet.
          </Text>
          <Formik
            validationSchema={signUpSchema}
            initialValues={{username: '', email: '', password: ''}}
            onSubmit={onSignup}>
            {props => <AuthValid {...props} />}
          </Formik>
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
    alignItems: 'center',
    padding: 80,
  },
  topLogo: {
    fontSize: 26,
    fontWeight: '700',
    color: PRIMARY_COLOR,
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
    backgroundColor: PRIMARY_COLOR,
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
