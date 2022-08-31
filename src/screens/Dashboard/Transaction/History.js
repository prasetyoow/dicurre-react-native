import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const History = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* Top Navigation */}
          <View style={styles.topHistoryContainer}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
            <Text style={styles.textTop}>History</Text>
          </View>

          {/* Filter Week */}
          <Text style={styles.textMuted}>This Week</Text>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../assets/images/sephiroth.png')}
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
                  source={require('../../assets/images/sephiroth.png')}
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

          {/* Filter Month */}
          <Text style={styles.textMuted}>This Month</Text>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../assets/images/sephiroth.png')}
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
                  source={require('../../assets/images/sephiroth.png')}
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
                  source={require('../../assets/images/sephiroth.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Momo Taro</Text>
                  <Text style={styles.textMutedHistory}>Transfer</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataSuccess}>+Rp.50.000</Text>
              </View>
            </View>
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
        </ScrollView>
      </SafeAreaView>
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
