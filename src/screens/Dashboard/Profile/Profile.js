import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {logout} from '../../../redux/reducers/auth';

const Profile = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const onLogout = () => {
    // dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <>
      <ScrollView>
        <View style={styles.topTransferContainer}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </View>

        <View style={styles.profileFlex}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/images/robert.png')}
          />
          <View style={styles.profEditFlex}>
            <Icon name="pencil" size={16} color="#7A7886" />
            <Text style={styles.editProf}>Edit</Text>
          </View>
          <Text style={styles.profName}>Robert Chandler</Text>
          <Text style={styles.profNum}>+62 813-9387-7946</Text>
        </View>

        <View style={styles.profCardFlex}>
          <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
            <View style={styles.profCardContainer}>
              <View style={styles.profFlexCard}>
                <Text style={styles.cardText}>Personal Information</Text>
                <Icon name="arrow-right" size={18} color="#7E7D84" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}>
            <View style={styles.profCardContainer}>
              <View style={styles.profFlexCard}>
                <Text style={styles.cardText}>Change Password</Text>
                <Icon name="arrow-right" size={18} color="#7E7D84" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ChangePIN')}>
            <View style={styles.profCardContainer}>
              <View style={styles.profFlexCard}>
                <Text style={styles.cardText}>Change PIN</Text>
                <Icon name="arrow-right" size={18} color="#7E7D84" />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.profCardContainer}>
            <View style={styles.profFlexCard}>
              <Text style={styles.cardText}>Notification</Text>
              <Switch
                trackColor={'#767577'}
                thumbColor={'#f4f3f4'}
                // onValueChange={toggleSwitch}
                // value={isEnabled}
              />
            </View>
          </View>

          <TouchableOpacity onPress={onLogout}>
            <View style={styles.profCardContainer}>
              <View style={styles.profFlexCard}>
                <Text style={styles.cardText}>Logout</Text>
                <Icon name="arrow-right" size={18} color="#7E7D84" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topTransferContainer: {
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
  },
  profileFlex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  profEditFlex: {
    flexDirection: 'row',
    marginTop: 15,
  },
  editProf: {
    marginLeft: 10,
    color: '#7A7886',
    fontSize: 16,
    fontWeight: '400',
  },
  profName: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 10,
  },
  profNum: {
    color: '#7A7886',
    fontSize: 16,
    fontWeight: '400',
  },
  profCardFlex: {
    padding: 15,
  },
  profCardContainer: {
    marginTop: 25,
    backgroundColor: '#E5E8ED',
    padding: 25,
    borderRadius: 10,
  },
  profFlexCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D4B57',
  },
});
export default Profile;
