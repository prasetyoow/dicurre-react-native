import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import InputTransfer from '../../../components/InputTransfer';
import {getUserLogin} from '../../../redux/asyncActions/profile';
import {getamount, getnotes} from '../../../redux/reducers/transactions';

// validation
import {Formik} from 'formik';
import * as Yup from 'yup';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';

const amountSchema = Yup.object().shape({
  amount: Yup.number()
    .min(20000, 'Minimum Transfer is IDR 20.000')
    .max(1000000, 'Maximum Transfer is IDR 1.000.000')
    .required('Please fill the amount'),
});

const AmountValid = ({
  handleChange,
  handleSubmit,
  errors,
  value,
  defaultValue,
  profile,
}) => {
  return (
    <>
      <View>
        <Text style={styles.amountAvail}>{profile.balance} Available</Text>
        <TextInput
          onChangeText={handleChange('amount')}
          style={styles.amountInput}
          placeholder="0,00"
          keyboardType="numeric"
          value={value}
          defaultValue={defaultValue}
        />
        <View style={styles.formAmountFlex}>
          <Icon
            style={styles.iconForm}
            name="pencil"
            size={24}
            color="#A9A9A999"
          />
          <TextInput
            onChangeText={handleChange('notes')}
            style={styles.textInputTransfer}
            placeholder="Add some notes"
            keyboardType="text"
            value={value}
            defaultValue={defaultValue}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={handleSubmit}>
            <Text style={styles.textButton}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const InputAmount = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.transactions.name);
  const phone = useSelector(state => state.transactions.phone);
  const profile = useSelector(state => state.profile.data);
  const image = useSelector(state => state.transactions.image);
  const slicedMoney = profile.balance
    .slice('2')
    .replace('.', '')
    .replace('.', '');
  const onConfirm = val => {
    if (parseInt(val.amount, 10) < parseInt(slicedMoney, 10)) {
      dispatch(getamount(val.amount));
      dispatch(getnotes(val.notes));
      navigation.navigate('Confirmation');
    } else {
      Alert.alert('Balance insufficient');
    }
    navigation.navigate('Confirmation');
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <ScrollView>
      {/* Top Navigation */}
      <View>
        <View style={styles.topTransferContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
          </TouchableOpacity>
          <Text style={styles.textTop}>Transfer</Text>
        </View>

        <View style={styles.dataHistoryContainer}>
          <View style={styles.dataHistoryFlex}>
            <View style={styles.profHistoryFlex}>
              <Image
                style={styles.dataHistoryImage}
                source={
                  image === null
                    ? require('../../../assets/images/defaultProfile.png')
                    : {
                        uri: 'http://192.168.1.10:8787/public/uploads/' + image,
                      }
                }
              />
              <View>
                <Text style={styles.dataNameHistory}>{name}</Text>
                <Text style={styles.textMutedHistory}>{phone}</Text>
              </View>
            </View>
          </View>
        </View>
        <Formik
          initialValues={{amount: '', notes: ''}}
          validationSchema={amountSchema}
          onSubmit={onConfirm}>
          {props => <AmountValid {...props} profile={profile} />}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  amountInput: {
    fontSize: 42,
    textAlign: 'center',
  },
  formAmountFlex: {
    flexDirection: 'row',
    marginTop: 20,
  },
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
  dataHistoryContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 25,
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  dataHistoryFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profHistoryFlex: {
    flexDirection: 'row',
  },
  dataHistoryImage: {
    borderRadius: 10,
    width: 66,
    height: 66,
  },
  dataNameHistory: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
    paddingLeft: 25,
    paddingBottom: 10,
  },
  textMutedHistory: {
    paddingLeft: 25,
  },
  amountAvail: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C7895',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  textInputTransfer: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  textInputFlex: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 2,
  },
  iconForm: {
    padding: 15,
  },
  containerButton: {
    backgroundColor: PRIMARY_COLOR,
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default InputAmount;
