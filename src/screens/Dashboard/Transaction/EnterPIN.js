/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactNativePinView from 'react-native-pin-view';
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {transfer} from '../../../redux/asyncActions/transactions';
import {resetmsg} from '../../../redux/reducers/transactions';

const EnterPIN = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.transactions.successMsg);
  const amount = useSelector(state => state.transactions.amount);
  const notes = useSelector(state => state.transactions.notes);
  const receiver_id = useSelector(state => state.transactions.receiver);
  const time = useSelector(state => state.transactions.date);
  const type_id = 18;
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
  React.useEffect(() => {
    dispatch(resetmsg());
    if (successMsg) {
      navigation.navigate('TransferSuccess');
    }
  }, [successMsg, navigation, dispatch]);
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topTransferContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Enter Your PIN</Text>
      </View>

      <Text style={styles.textMuted}>
        Enter your 6 digits PIN for confirmation to continue transferring money.
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
          borderColor: PRIMARY_COLOR,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        buttonTextStyle={{
          color: PRIMARY_COLOR,
        }}
        onButtonPress={key => {
          if (key === 'custom_left') {
            pinView.current.clear();
          }
          if (key === 'custom_right') {
            setShowCompletedButton(!showCompletedButton);
            const request = {
              amount,
              notes,
              receiver_id,
              time,
              type_id,
              pin: enteredPin,
            };
            dispatch(transfer({token, request}));
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

      {/* <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate('TransferSuccess')}>
        <Text style={styles.textButton}>Transfer Now</Text>
      </TouchableOpacity> */}
    </>
  );
};

const styles = StyleSheet.create({
  topTransferContainer: {
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
    padding: 15,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  containerButton: {
    backgroundColor: PRIMARY_COLOR,
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  pinBorder: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
  },
});

export default EnterPIN;
