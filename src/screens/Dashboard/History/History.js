import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ListHistory from '../../../components/ListHistory';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../../../redux/asyncActions/transactions';

const History = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const data = useSelector(state => state.transactions.resultsHistory);

  React.useEffect(() => {
    dispatch(getHistoryTransaction(token));
  }, [dispatch, token]);
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topHistoryContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>History</Text>
      </View>

      {/* Filter Asc/Desc & Date */}
      <View style={styles.filterFlex}>
        <View style={styles.ascContainer}>
          <Icon name="arrow-up" size={24} color="#FF5B37" />
        </View>
        <View style={styles.descContainer}>
          <Icon name="arrow-down" size={24} color="#1EC15F" />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.textDate}>Filter by Date</Text>
        </View>
      </View>

      <FlatList
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
    </>
  );
};

const styles = StyleSheet.create({
  topHistoryContainer: {
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
    padding: 15,
    marginTop: 30,
    fontSize: 16,
    fontWeight: '400',
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
  filterFlex: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ascContainer: {
    backgroundColor: 'white',
    width: 57,
    height: 57,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descContainer: {
    backgroundColor: 'white',
    width: 57,
    height: 57,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    backgroundColor: 'white',
    width: 189,
    height: 57,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDate: {
    color: '#6379F4',
  },
});
export default History;
