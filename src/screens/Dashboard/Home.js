import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* Profile */}
          <View style={styles.profileSection}>
            <View style={styles.profileFlex}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/sephiroth.png')}
              />
              <View style={styles.profileName}>
                <Text>Hello,</Text>
                <Text>Prase</Text>
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
              <Text style={styles.textBalanceMid}>Rp. 100.000</Text>
              <Text style={styles.textBalanceBot}>+62 89618343727</Text>
            </View>
          </View>

          {/* Top up */}
          <View style={styles.containerTopUpFlex}>
            <View style={styles.containerTopUp}>
              <View style={styles.contentTopup}>
                <View style={styles.transferFlex}>
                  <Icon name="arrow-up" size={24} color="#608DE2" />
                  <Text style={styles.textTransfer}>Transfer</Text>
                </View>
              </View>
            </View>
            <View style={styles.containerTopUp}>
              <View style={styles.contentTopup}>
                <View style={styles.transferFlex}>
                  <Icon name="plus" size={24} color="#608DE2" />
                  <Text style={styles.textTransfer}>Top Up</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Transaction History */}
          <View style={styles.historyFlex}>
            <Text style={styles.historyTransText}>Transaction History</Text>
            <Text style={styles.historyLink}>See all</Text>
          </View>

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
                  <Text style={styles.dataNameHistory}>Samuel Suhi</Text>
                  <Text style={styles.textMutedHistory}>Transfer</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataSuccess}>+Rp.50.000</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    width: 52,
    height: 52,
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
    backgroundColor: '#6379F4',
    borderRadius: 20,
    padding: 15,
    margin: 15,
  },
  containerContentBalance: {
    padding: 10,
  },
  textBalanceTop: {
    color: '#D0D0D0',
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
    color: '#D0D0D0',
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
