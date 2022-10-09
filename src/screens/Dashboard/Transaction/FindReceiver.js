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
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';
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
  resetDataContact,
} from '../../../redux/reducers/transactions';

const FindReceiver = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [sort, setSort] = React.useState('ASC');
  const [search, setSearch] = React.useState('');
  const [sortType, setSortType] = React.useState('fullname');
  const nextPage = useSelector(state => state.transactions?.nextPage);
  const pageInfo = useSelector(state => state.transactions?.pageInfo);

  const onSearch = value => {
    dispatch(resetDataContact());
    setSearch(value);
    if (value === '') {
      dispatch(resetDataContact());
    }
  };

  const onAsc = () => {
    dispatch(resetDataContact());
    setSort('ASC');
  };

  const onDesc = () => {
    dispatch(resetDataContact());
    setSort('DESC');
  };

  const onSortType = () => {
    if (sortType === 'fullname') {
      dispatch(resetDataContact());
      setSortType('phone_number');
    } else {
      dispatch(resetDataContact());
      setSortType('fullname');
    }
  };

  let page = pageInfo?.currentPage;
  const nextData = () => {
    page++;
    if (pageInfo?.nextPage !== null && page !== 1) {
      dispatch(
        getAllProfile({
          page,
          limit: 6,
          sortType: sort,
          orderBy: sortType,
          search: search,
        }),
      );
      console.log('next');
      console.log(page++);
    }
  };
  const passData = item => {
    dispatch(getname(item.fullname));
    dispatch(getphone(item.phone_number));
    dispatch(getimage(item.picture));
    dispatch(getreceiver(item.user_id));
    navigation.navigate('InputAmount');
  };
  React.useEffect(() => {
    dispatch(
      getAllProfile({
        limit: 6,
        page: 1,
        sortType: sort,
        orderBy: sortType,
        search: search,
      }),
    );
    dispatch(resetDataContact());
  }, [dispatch, sort, sortType, search]);
  return (
    <>
      {/* Top Navigation */}

      <View style={styles.topReceiverContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#4D4B57" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Find Receiver</Text>
      </View>

      {/* Input search receiver */}
      <View style={styles.formFlex}>
        <Icon style={styles.iconForm} name="search" size={20} color="#A9A9A9" />
        <TextInput
          style={styles.textForm}
          onChangeText={onSearch}
          value={search}
          placeholder="Search receiver here"
        />
      </View>

      {/* All Contact */}
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.padding}>
              <Text style={styles.textMid}>All Contact</Text>
              <Text style={styles.textMuted}>
                {pageInfo?.totalData} Contacts Found
              </Text>
            </View>
            <View style={styles.filterFlex}>
              <TouchableOpacity
                onPress={() => onAsc()}
                disabled={sort === 'ASC'}>
                <View style={styles.ascContainer}>
                  <Icon name="arrow-up" size={24} color="#FF5B37" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDesc()}
                disabled={sort === 'DESC'}>
                <View style={styles.descContainer}>
                  <Icon name="arrow-down" size={24} color="#1EC15F" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onSortType}>
                <View style={styles.dateContainer}>
                  <Text style={styles.textDate}>
                    Filter by {sortType === 'fullname' ? 'Name' : 'Phone'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        }
        data={nextPage}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => passData(item)}>
              <ListContact item={item} />
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
    paddingHorizontal: 10,
  },
  paginFlex: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numPagin: {
    marginTop: 5,
    fontSize: 16,
  },
  buttonPaginContainer: {
    backgroundColor: PRIMARY_COLOR,
    width: 100,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterFlex: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default FindReceiver;
