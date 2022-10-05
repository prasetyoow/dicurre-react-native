import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux/reducers/auth';
import {getUserLogin} from '../../../redux/asyncActions/profile';
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';

const Profile = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const signOut = () => {
    dispatch(logout());
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <>
      <ScrollView>
        <View style={styles.topTransferContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileFlex}>
          <Image
            style={styles.profileImage}
            source={
              profile.picture === null
                ? require('../../../assets/images/defaultProfile.png')
                : {
                    uri:
                      'http://192.168.1.10:8888/public/uploads/' +
                      profile.picture,
                  }
            }
          />
          <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={styles.profEditFlex}>
              <Icon name="pencil" size={16} color="#7A7886" />
              <Text style={styles.editProf}>Edit</Text>
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={show}
              onRequestClose={() => setShow(!show)}
              style={stylesLocal.br}>
              <View style={stylesLocal.modalBg}>
                <View style={stylesLocal.wrapModal}>
                  <Text style={stylesLocal.titleModal}>Edit Profile</Text>
                  <Image
                    style={stylesLocal.profileImageModal}
                    source={
                      profile.picture === null
                        ? require('../../../assets/images/defaultProfile.png')
                        : {
                            uri:
                              'http://192.168.1.10:8888/public/uploads/' +
                              profile.picture,
                          }
                    }
                  />
                  <View style={stylesLocal.modalPictFlex}>
                    <TouchableOpacity>
                      <View style={stylesLocal.pictContainer}>
                        <Text style={stylesLocal.textPict}>Camera</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={stylesLocal.pictContainer}>
                        <Text style={stylesLocal.textPict}>Gallery</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={stylesLocal.input}
                    keyboardType="email-address"
                    placeholder="Enter your new fullname"
                    // value={amount}
                    // onChangeText={setAmount}
                  />
                  <View style={stylesLocal.buttonModalFlex}>
                    <TouchableOpacity
                      style={stylesLocal.cancel}
                      onPress={() => setShow(!show)}>
                      <Text style={stylesLocal.acount}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesLocal.confirmModal}>
                      <Text style={stylesLocal.acount}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <Text style={styles.profName}>
            {profile.fullname === null ? '-' : profile.fullname}
          </Text>
          <Text style={styles.profNum}>
            {profile.phone_number === null ? '-' : profile.phone_number}
          </Text>
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

          <TouchableOpacity onPress={signOut}>
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

const stylesLocal = StyleSheet.create({
  modalBg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  wrapModal: {
    borderRadius: 12,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2.3,
    marginVertical: 50,
    marginHorizontal: 25,
    elevation: 4,
    alignItems: 'center',
  },
  titleModal: {
    marginBottom: 30,
    marginTop: 15,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    color: 'gray',
  },
  profileImageModal: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalPictFlex: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  pictContainer: {
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: 'transparent',
    height: 45,
    width: 70,
    borderWidth: 1,
  },
  textPict: {
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'gray',
  },
  buttonModalFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 30,
  },
  cancel: {
    height: 35,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: 'black',
  },
  confirmModal: {
    height: 35,
    borderRadius: 12,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
  },
});
export default Profile;
