import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {topUp} from '../../../redux/asyncActions/transactions';
import {resetmsg} from '../../../redux/reducers/transactions';
import {useNavigation} from '@react-navigation/native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

const Topup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const notes = 'Top up';
  const time = new Date();
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.transactions.successMsg);
  const submit = () => {
    const request = {amount, notes, time};
    console.log(amount);
    console.log(token);
    dispatch(topUp({token, request}));
  };
  React.useEffect(() => {
    if (successMsg) {
      dispatch(resetmsg());
      setShow(false);
    }
  }, [dispatch, token, successMsg]);
  return (
    <>
      {/* Top Navigation */}
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topTransferContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={30} color="#4D4B57" />
            </TouchableOpacity>
            <Text style={styles.textTop}>Top Up</Text>
          </View>

          <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={styles.topUpFlex}>
              <View>
                <View style={styles.iconCenter}>
                  <Icon name="plus" size={28} color="#6379F4" />
                </View>
              </View>

              <View style={styles.textTopUpFlex}>
                <Text style={styles.textVA}>Virtual Account Number</Text>
                <Text style={styles.numberVA}>2389 {profile.phone_number}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={show}
            onRequestClose={() => setShow(!show)}
            style={stylesLocal.br}>
            <View style={stylesLocal.modalBg}>
              <View style={stylesLocal.wrapModal}>
                <Text style={stylesLocal.titleModal}>Top up</Text>
                <TextInput
                  style={stylesLocal.input}
                  keyboardType="decimal-pad"
                  placeholder="Enter your nominal"
                  value={amount}
                  onChangeText={setAmount}
                />
                <View style={stylesLocal.wrapButton}>
                  <TouchableOpacity
                    style={stylesLocal.cancel}
                    onPress={() => setShow(!show)}>
                    <Text style={stylesLocal.acount}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={stylesLocal.topUp}
                    onPress={() => submit()}>
                    <Text style={stylesLocal.acount}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <Text style={styles.textMutedTop}>
            We provide you virtual account number for top up via nearest ATM.
          </Text>

          <Text style={styles.textMid}>How to Top-Up</Text>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>1</Text>
                <Text style={styles.textTopUp}>
                  Go to the nearest ATM or you can use E-Banking.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>2</Text>
                <Text style={styles.textTopUp}>
                  Type your security number on the {'\n'} ATM or E-Banking.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>3</Text>
                <Text style={styles.textTopUpOne}>
                  Select “Transfer” in the menu
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>4</Text>
                <Text style={styles.textTopUp}>
                  Type the virtual account number that {'\n'} we provide you at
                  the top.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>5</Text>
                <Text style={styles.textTopUp}>
                  Type the amount of the money you {'\n'} want to top up.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>6</Text>
                <Text style={styles.textTopUpOne}>
                  Read the summary details
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>7</Text>
                <Text style={styles.textTopUpOne}>Press transfer / top up</Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>8</Text>
                <Text style={styles.textTopUp}>
                  You can see your money in Zwallet {'\n'} within 3 hours.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  topUpFlex: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  iconCenter: {
    width: 56,
    height: 56,
    backgroundColor: '#EBEEF2',
    marginTop: 15,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textTopUpFlex: {
    flexDirection: 'column',
    padding: 15,
  },
  textVA: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  numberVA: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
  },
  textMutedTop: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    padding: 15,
    textAlign: 'center',
  },
  textMid: {
    padding: 15,
    fontSize: 18,
    color: '#514F5B',
    fontWeight: '700',
  },
  topUpFlexContainer: {
    padding: 15,
  },
  topupContainer: {
    height: 88,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  topUpTextFlex: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  numTopUp: {
    color: '#6379F4',
    fontSize: 18,
    fontWeight: '700',
    padding: 15,
  },
  textTopUp: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7A7886',
  },
  textTopUpOne: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7A7886',
  },
});

const stylesLocal = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
  marLeft: {
    marginLeft: 15,
  },
  pict: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '',
    height: Dimensions.get('screen').height * (15 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    elevation: 3,
  },
  topUp2: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#6379F4',
    height: Dimensions.get('screen').height * (20 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    padding: 15,
  },
  topUpContent: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: Dimensions.get('screen').width * (90 / 100),
    height: Dimensions.get('screen').height * (7 / 100),
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  transfer: {
    backgroundColor: '#6379F4',
    height: 120,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  modalBg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  br: {
    borderRadius: 15,
  },
  wrapModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2,
    margin: 50,
    elevation: 4,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 30,
    color: 'gray',
  },
  input: {
    height: 40,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'gray',
  },
  wrapButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cancel: {
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    elevation: 6,
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: 'black',
  },
  topUp: {
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    elevation: 6,
  },
});

export default Topup;
