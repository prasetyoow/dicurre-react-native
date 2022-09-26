import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ListContact from '../../../components/ListContact';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllProfile,
  getname,
  getphone,
  getimage,
  getreceiver,
} from '../../../redux/reducers/transactions';

const FindReceiver = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profiles = useSelector(state => state.transactions?.results);
  console.log(profiles);
  // const totalData = useSelector(state => state.transactions?.totalData);
  const passData = item => {
    dispatch(getname(item.fullname));
    dispatch(getphone(item.phone_number));
    dispatch(getimage(item.picture));
    dispatch(getreceiver(item.user_id));
    navigation.navigate('InputAmount');
  };
  React.useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);
  return (
    <>
      {/* <SafeAreaView> */}
      {/* <ScrollView> */}
      {/* Top Navigation */}
      <View style={styles.topReceiverContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Find Receiver</Text>
      </View>

      {/* Input search receiver */}
      <View style={styles.formFlex}>
        <Icon style={styles.iconForm} name="search" size={20} color="#A9A9A9" />
        <TextInput style={styles.textForm} placeholder="Search receiver here" />
      </View>

      {/* All Contact */}
      <FlatList
        ListHeaderComponent={
          <View style={styles.padding}>
            <Text style={styles.textMid}>All Contact</Text>
            <Text style={styles.textMuted}>17 Contacts Found</Text>
          </View>
        }
        data={profiles}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => passData(item)}>
              <ListContact item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.padding}
      />
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  topReceiverContainer: {
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
  formFlex: {
    flexDirection: 'row',
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    margin: 15,
    borderRadius: 10,
  },
  iconForm: {
    padding: 15,
  },
  textMid: {
    padding: 15,
    fontSize: 18,
    color: '#514F5B',
    fontWeight: '700',
  },
  contactFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  contactContainer: {
    width: 96,
    height: 146,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactImage: {
    borderRadius: 10,
    width: 66,
    height: 66,
  },
  textName: {
    marginTop: 10,
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
  },
  textPhone: {
    marginTop: 10,
  },
  textMuted: {
    paddingLeft: 15,
    marginBottom: 15,
  },
  dataHistoryContainer: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20,
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
  dataSuccess: {
    color: '#1EC15F',
    marginTop: 15,
    fontSize: 18,
    fontWeight: '700',
  },
  dataDanger: {
    color: '#FF5B37',
    marginTop: 15,
    fontSize: 18,
    fontWeight: '700',
  },
  padding: {
    padding: 10,
  },
});

export default FindReceiver;
