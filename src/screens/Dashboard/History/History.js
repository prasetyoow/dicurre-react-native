import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ListHistory from '../../../components/ListHistory';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../../../redux/asyncActions/transactions';
import {resetDataHistory} from '../../../redux/reducers/transactions';
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';

const History = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const nextPage = useSelector(state => state.transactions?.nextPageHistory);
  const pageInfo = useSelector(state => state.transactions?.pageInfoHistory);

  const [sort, setSort] = React.useState('DESC');

  const onAsc = () => {
    dispatch(resetDataHistory());
    setSort('ASC');
  };

  const onDesc = () => {
    dispatch(resetDataHistory());
    setSort('DESC');
  };

  let page = pageInfo?.currentPage;
  const nextData = () => {
    page++;
    if (pageInfo?.nextPage !== null && page !== 1) {
      dispatch(
        getHistoryTransaction({token, param: {page, limit: 6, sortType: sort}}),
      );
      console.log('next');
      console.log(page++);
    }
  };

  React.useEffect(() => {
    dispatch(
      getHistoryTransaction({
        token,
        param: {limit: 6, page: 1, sortType: sort},
      }),
    );
    dispatch(resetDataHistory());
  }, [dispatch, token, sort]);
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topHistoryContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>History</Text>
      </View>

      <Text style={styles.textMuted}>
        {pageInfo?.totalData} Data History Found
      </Text>

      {/* Filter Asc/Desc & Date */}
      <View style={styles.filterFlex}>
        <TouchableOpacity onPress={() => onAsc()} disabled={sort === 'ASC'}>
          <View style={styles.ascContainer}>
            <Icon name="arrow-up" size={24} color="#FF5B37" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDesc()} disabled={sort === 'DESC'}>
          <View style={styles.descContainer}>
            <Icon name="arrow-down" size={24} color="#1EC15F" />
          </View>
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          <Text style={styles.textDate}>Filter by Date</Text>
        </View>
      </View>

      <FlatList
        data={nextPage}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('TransferSuccess')}>
              <ListHistory item={item} />
            </TouchableOpacity>
          );
        }}
        onEndReached={nextData}
        onEndReachedThreshold={0.5}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.padding}
      />
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 10,
  },
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
    color: PRIMARY_COLOR,
  },
});
export default History;
