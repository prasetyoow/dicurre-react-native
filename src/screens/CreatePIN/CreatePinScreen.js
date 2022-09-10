import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {createpin} from '../../redux/asyncActions/auth';

// components
// import CustomButton from '../../components/CustomButton';
// import CodePin from 'react-native-pin-code';

const CreatePinScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const tempEmail = useSelector(state => state.auth.tempEmail);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
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
        <ReactNativePinView
          pinLength={6}
          ref={pinView}
          inputViewFilledStyle={styles.pinBorder}
          // eslint-disable-next-line react-native/no-inline-styles
          inputViewEmptyStyle={{
            backgroundColor: 'white',
            borderColor: '#A9A9A999',
            borderWidth: 1,
          }}
          onValueChange={value => setEnteredPin(value)}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: '#6379F4',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonTextStyle={{
            color: '#6379F4',
          }}
          onButtonPress={key => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              // Alert.alert('Entered Pin: ' + enteredPin);
              dispatch(createpin({email: tempEmail, pin: enteredPin}));
              navigation.navigate('Login');
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name="remove" size={36} color="red" />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Icon name="check" size={36} color="green" />
            ) : undefined
          }
        />
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('CreatePINSuccess')}>
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
  pinBorder: {
    borderWidth: 1,
    borderColor: '#6379F4',
    backgroundColor: '#6379F4',
  },
});

export default CreatePinScreen;
