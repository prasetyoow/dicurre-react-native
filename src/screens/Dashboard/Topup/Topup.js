import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Topup = () => {
  return (
    <>
      {/* Top Navigation */}
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topTransferContainer}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
            <Text style={styles.textTop}>Top Up</Text>
          </View>

          <View style={styles.topUpFlex}>
            <View style={styles.iconTopUpContainer}>
              <View style={styles.iconCenter}>
                <Icon name="plus" size={28} color="#6379F4" />
              </View>
            </View>

            <View style={styles.textTopUpFlex}>
              <Text style={styles.textVA}>Virtual Account Number</Text>
              <Text style={styles.numberVA}>2389 081393877946</Text>
            </View>
          </View>

          <Text style={styles.textMutedTop}>
            We provide you virtual account number for top up via nearest ATM.
          </Text>

          <Text style={styles.textMid}>How to Top-Up</Text>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>1</Text>
                <Text style={styles.textTopUp}>
                  Go to the nearest ATM or you can use E-Banking.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>2</Text>
                <Text style={styles.textTopUp}>
                  Type your security number on the ATM or E-Banking.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>3</Text>
                <Text style={styles.textTopUpOne}>
                  Select “Transfer” in the menu
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>4</Text>
                <Text style={styles.textTopUp}>
                  Type the virtual account number that we provide you at the
                  top.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>5</Text>
                <Text style={styles.textTopUp}>
                  Type the amount of the money you {'\n'} want to top up.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>6</Text>
                <Text style={styles.textTopUpOne}>
                  Read the summary details
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>7</Text>
                <Text style={styles.textTopUpOne}>Press transfer / top up</Text>
              </View>
            </View>
          </View>

          <View style={styles.topUpFlexContainer}>
            <View style={styles.topupContainer}>
              <View style={styles.topUpTextFlex}>
                <Text style={styles.numTopUp}>8</Text>
                <Text style={styles.textTopUp}>
                  You can see your money in Zwallet within 3 hours.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topTransferContainer: {
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
  topUpFlex: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  iconCenter: {
    width: 56,
    height: 56,
    backgroundColor: '#EBEEF2',
    marginTop: 15,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textTopUpFlex: {
    flexDirection: 'column',
    padding: 15,
  },
  textVA: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  numberVA: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
  },
  textMutedTop: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    padding: 15,
    textAlign: 'center',
  },
  textMid: {
    padding: 15,
    fontSize: 18,
    color: '#514F5B',
    fontWeight: '700',
  },
  topUpFlexContainer: {
    padding: 15,
  },
  topupContainer: {
    height: 88,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 4,
    shadowRadius: 20,
  },
  topUpTextFlex: {
    flexDirection: 'row',
    padding: 10,
  },
  numTopUp: {
    color: '#6379F4',
    fontSize: 18,
    fontWeight: '700',
    padding: 15,
  },
  textTopUp: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7A7886',
  },
  textTopUpOne: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7A7886',
  },
});

export default Topup;
