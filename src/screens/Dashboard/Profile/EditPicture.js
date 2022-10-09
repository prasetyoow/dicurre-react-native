import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {editPicture, getUserLogin} from '../../../redux/asyncActions/profile';

const EditPicture = () => {
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
        <Text style={styles.textTop}>Edit Picture</Text>
      </View>

      <View style={styles.editPicContainer}>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.imageProf}
            source={
              profile.picture === null
                ? require('../../../assets/images/defaultProfile.png')
                : {
                    uri: profile.picture,
                  }
            }
          />
        </View>
        <View style={styles.buttonWraper}>
          <TouchableOpacity
            style={styles.borderBtn}
            onPress={async () =>
              await launchImageLibrary({maxHeight: 500, maxWidth: 500}, res =>
                dispatch(editPicture({token, ...res.assets[0]})),
              )
            }>
            <View style={styles.button}>
              <Icon name="image" size={36} />
              <Text>Gallery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.borderBtn}
            onPress={async () =>
              await launchCamera({maxHeight: 500, maxWidth: 500}, res =>
                dispatch(editPicture({token, ...res.assets[0]})),
              )
            }>
            <View style={styles.button}>
              <Icon name="camera" size={36} />
              <Text>Camera</Text>
            </View>
          </TouchableOpacity>
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
  editPicContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  pictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProf: {
    width: Dimensions.get('screen').width - 40,
    aspectRatio: 1,
    borderRadius: 12,
  },
  buttonWraper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  button: {
    width: Dimensions.get('screen').width / 2.2,
    height: Dimensions.get('screen').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBtn: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: 'black',
    elevation: 3,
    borderRadius: 12,
  },
});

export default EditPicture;
