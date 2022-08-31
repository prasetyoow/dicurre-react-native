import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const TransferFailed = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.iconCenter}>
            <View style={styles.iconContainer}>
              <Icon name="x" size={40} color="white" />
            </View>
          </View>
          <Text style={styles.contentHead}>Transfer Failed</Text>
          <Text style={styles.textMuted}>
            We can't transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </Text>

          <Text style={styles.textMid}>Details</Text>

          <View style={styles.dataHistoryContainer}>
            <Text style={styles.textMutedTransfer}>Amount</Text>
            <Text style={styles.textAmountTransfer}>Rp. 100.000</Text>
          </View>

          <View style={styles.dataHistoryContainer}>
            <Text style={styles.textMutedTransfer}>Balance Left</Text>
            <Text style={styles.textAmountTransfer}>Rp. 20.000</Text>
          </View>

          <View style={styles.dataHistoryContainer}>
            <Text style={styles.textMutedTransfer}>Date & Time</Text>
            <Text style={styles.textAmountTransfer}>May 11, 2020 - 12.20</Text>
          </View>

          <View style={styles.dataHistoryContainer}>
            <Text style={styles.textMutedTransfer}>Notes</Text>
            <Text style={styles.textAmountTransfer}>For buying some socks</Text>
          </View>

          <Text style={styles.textMid}>Transfer to</Text>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/sephiroth.png')}
                />
                <View>
                  <Text style={styles.dataNameHistory}>Bobi Sammy</Text>
                  <Text style={styles.textMutedHistory}>+62 813-8492-9994</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.containerButton}>
            <Text style={styles.textButton}>Back to Home</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#FF5B37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCenter: {
    margin: 40,
    alignItems: 'center',
  },
  contentHead: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#3A3D42',
  },
  textMid: {
    padding: 15,
    fontSize: 18,
    color: '#514F5B',
    fontWeight: '700',
  },
  textMuted: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7A7886',
    padding: 15,
  },
  dataHistoryContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
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
  textMutedTransfer: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginBottom: 10,
  },
  textAmountTransfer: {
    fontSize: 22,
    fontWeight: '700',
    color: '#514F5B',
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TransferFailed;
