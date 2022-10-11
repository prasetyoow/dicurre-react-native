import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import qs from 'qs';

// redux
import {resetMsg} from '../../../redux/reducers/profile';
import {editPhoneNumber} from '../../../redux/asyncActions/profile';

const AddPhoneNum = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successMsg);

  const onChangePhone = () => {
    dispatch(resetMsg);
    const request = {token: token, phone_number: phone};
    console.log(qs.stringify(request) + ' dari page');
    dispatch(editPhoneNumber(request));
    if (successMsg) {
      navigation.navigate('Profile');
    }
  };

  React.useEffect(() => {
    dispatch(resetMsg);
    if (successMsg) {
      navigation.navigate('Profile');
    }
  }, [dispatch, successMsg, navigation]);

  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Add Phone Number</Text>
      </View>

      <Text style={styles.textMuted}>
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </Text>

      <View style={styles.textInputFlex}>
        <Icon
          style={styles.iconForm}
          name="phone"
          size={24}
          color="#A9A9A999"
        />
        <Text style={styles.textForm}>+62</Text>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="decimal-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity style={styles.containerButton} onPress={onChangePhone}>
        <Text style={styles.textButton}>Submit</Text>
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
  textForm: {
    paddingTop: 15,
    marginRight: 10,
  },
  containerButton: {
    backgroundColor: '#6379F4',
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

export default AddPhoneNum;
