import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ListHistory from '../../components/ListHistory';
import qs from 'qs';

// redux
import {getUserLogin} from '../../redux/asyncActions/profile';
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../../redux/asyncActions/transactions';
import {PRIMARY_COLOR} from '../../assets/styles/coloring';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data);
  console.log(profile.balance);
  const token = useSelector(state => state.auth.token);
  const data = useSelector(state => state.transactions.resultsHistory);
  console.log(qs.stringify(data) + ' ini data history');

  const [sort, setSort] = React.useState('DESC');

  React.useEffect(() => {
    dispatch(getUserLogin(token));
    dispatch(
      getHistoryTransaction({
        token,
        param: {limit: 5, page: 1, sortType: sort},
      }),
    );
  }, [dispatch, token, sort]);
  return (
    <>
      {/* Profile */}
      <View style={styles.profileSection}>
        <View style={styles.profileFlex}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.profileImage}
              source={
                profile?.picture === null
                  ? require('../../assets/images/defaultProfile.png')
                  : {
                      uri: profile?.picture,
                    }
              }
            />
          </TouchableOpacity>
          <View style={styles.profileName}>
            <Text>Hello,</Text>
            <Text style={styles.userName}>
              {profile?.fullname === null ? '-' : profile?.fullname}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileNotif}>
          <Icon name="bell" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <View style={styles.containerBalance}>
        <View style={styles.containerContentBalance}>
          <Text style={styles.textBalanceTop}>Balance</Text>
          <Text style={styles.textBalanceMid}>
            {profile?.balance === null ? (
              '-'
            ) : (
              <Text>Rp. {profile?.balance}</Text>
            )}
          </Text>
          <Text style={styles.textBalanceBot}>
            {profile?.phone_number === null ? '-' : profile?.phone_number}
          </Text>
        </View>
      </View>

      {/* Top up */}
      <View style={styles.containerTopUpFlex}>
        <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
          <View style={styles.containerTopUp}>
            <View style={styles.contentTopup}>
              <View style={styles.transferFlex}>
                <Icon name="arrow-up" size={24} color={PRIMARY_COLOR} />
                <Text style={styles.textTransfer}>Transfer</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TopUp')}>
          <View style={styles.containerTopUp}>
            <View style={styles.contentTopup}>
              <View style={styles.transferFlex}>
                <Icon name="plus" size={24} color={PRIMARY_COLOR} />
                <Text style={styles.textTransfer}>Top Up</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Transaction History */}
      <View style={styles.historyFlex}>
        <Text style={styles.historyTransText}>Transaction History</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={styles.historyLink}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Mapping History Transactions */}

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TransferSuccessHistory', {item})
              }>
              <ListHistory item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.padding}
      />
    </>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    justifyContent: 'space-between',
  },
  profileFlex: {
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
  },
  profileName: {
    flexDirection: 'column',
    marginTop: 5,
    paddingLeft: 30,
  },
  profileNotif: {
    paddingTop: 15,
  },
  containerBalance: {
    width: 380,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    padding: 15,
    margin: 15,
  },
  containerContentBalance: {
    padding: 10,
  },
  textBalanceTop: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textBalanceMid: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 10,
  },
  textBalanceBot: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 10,
  },
  containerTopUpFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTopUp: {
    width: 172,
    backgroundColor: '#EAEDFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
  transferFlex: {
    margin: 10,
    padding: 15,
    flexDirection: 'row',
  },
  textTransfer: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
  },
  historyFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  historyTransText: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: '700',
  },
  historyLink: {
    color: '#6379F4',
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
});

export default Home;
