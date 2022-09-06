import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactNativePinView from 'react-native-pin-view';
import {useNavigation} from '@react-navigation/native';

const ChangePIN = () => {
  const navigation = useNavigation();
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
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
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Change PIN</Text>
      </View>

      <Text style={styles.textMuted}>
        Enter your current 6 digits Zwallet PIN below to continue to the next
        steps.
      </Text>

      <ReactNativePinView
        pinLength={6}
        ref={pinView}
        inputViewFilledStyle={styles.pinBorder}
        onValueChange={value => setEnteredPin(value)}
        // eslint-disable-next-line react-native/no-inline-styles
        inputViewEmptyStyle={{
          backgroundColor: 'white',
          borderColor: '#A9A9A999',
          borderWidth: 1,
        }}
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
            Alert.alert('Entered Pin: ' + enteredPin);
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
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.textButton}>Change PIN</Text>
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
  pinBorder: {
    borderWidth: 1,
    borderColor: '#6379F4',
    backgroundColor: '#6379F4',
  },
});

export default ChangePIN;
