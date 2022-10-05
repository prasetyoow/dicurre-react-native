import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

// redux
import {getUserLogin} from '../../../redux/asyncActions/profile';
import {useDispatch, useSelector} from 'react-redux';

const PersonalInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Personal Information</Text>
      </View>

      <Text style={styles.textMuted}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>

      <View style={styles.dataHistoryContainer}>
        <Text style={styles.textMutedTransfer}>Full name</Text>
        <Text style={styles.textAmountTransfer}>{profile.fullname}</Text>
      </View>

      <View style={styles.dataHistoryContainer}>
        <Text style={styles.textMutedTransfer}>Verified E-mail</Text>
        <Text style={styles.textAmountTransfer}>pewdiepie1@gmail.com</Text>
      </View>

      <View style={styles.dataHistoryContainer}>
        <View>
          <Text style={styles.textMutedTransfer}>Phone Number</Text>
          <Text style={styles.textAmountTransfer}>{profile.phone_number}</Text>
        </View>
      </View>
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
  dataHistoryContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  textMutedTransfer: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginBottom: 10,
  },
  textAmountTransfer: {
    fontSize: 22,
    fontWeight: '700',
    color: '#514F5B',
  },
});

export default PersonalInfo;
