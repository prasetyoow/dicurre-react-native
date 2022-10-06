import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListHistory from '../../../components/ListHistory';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../../../redux/asyncActions/transactions';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const data = useSelector(state => state.transactions.resultsHistory);

  const [sort, setSort] = React.useState('DESC');

  React.useEffect(() => {
    dispatch(
      getHistoryTransaction({
        token,
        param: {limit: 5, page: 1, sortType: sort},
      }),
    );
  }, [dispatch, token, sort]);
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topDetailContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Transaction</Text>
      </View>

      {/* Mapping history transactions */}
      <FlatList
        ListHeaderComponent={
          <>
            {/* Top Mid Content */}
            <View style={styles.topMidContainer}>
              <View style={styles.expenseFlex}>
                <Icon name="arrow-down" size={28} color="#1EC15F" />
                <Text style={styles.textMuted}>Income</Text>
                <Text style={styles.textWhite}>Rp. 2.120.000</Text>
              </View>
              <View style={styles.expenseFlex}>
                <Icon name="arrow-down" size={28} color="#FF5B37" />
                <Text style={styles.textMuted}>Expense</Text>
                <Text style={styles.textWhite}>Rp. 1.560.000</Text>
              </View>
            </View>
            <View />
            {/* Graphic */}
            <Text style={styles.textWeek}>In This Week</Text>
            <Image
              style={styles.graphImage}
              source={require('../../../assets/images/graphic.png')}
            />
            {/* Transaction History */}
            <View style={styles.historyFlex}>
              <Text style={styles.historyTransText}>Transaction History</Text>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text style={styles.historyLink}>See all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('TransferSuccess')}>
              <ListHistory item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.padding}
      />
      {/* <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Samuel Suhi</Text>
                  <Text style={styles.textMutedHistory}>Transfer</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataSuccess}>+Rp.50.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Spotify</Text>
                  <Text style={styles.textMutedHistory}>Subscription</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataDanger}>-Rp.49.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Netflix</Text>
                  <Text style={styles.textMutedHistory}>Subscription</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataDanger}>-Rp.149.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Bobi Sammy</Text>
                  <Text style={styles.textMutedHistory}>Transfer</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataSuccess}>+Rp.1.150.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Samuel Suhi</Text>
                  <Text style={styles.textMutedHistory}>Transfer</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataSuccess}>+Rp.50.000</Text>
              </View>
            </View>
          </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  topDetailContainer: {
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
  topMidContainer: {
    width: 380,
    backgroundColor: '#6379F4',
    borderRadius: 20,
    padding: 25,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMuted: {
    color: '#D0D0D0',
    marginTop: 10,
  },
  textWhite: {
    color: '#F1F1F1',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  textWeek: {
    padding: 15,
    marginTop: 30,
    color: '#514F5B',
    fontSize: 18,
    fontWeight: '700',
  },
  graphImage: {
    marginLeft: 25,
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
    marginTop: 30,
  },
  historyLink: {
    color: '#6379F4',
    marginTop: 30,
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

export default Details;
