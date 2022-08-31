import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputAmount = () => {
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topTransferContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Transfer</Text>
      </View>

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

      <View>
        <Text style={styles.amountAvail}>Rp. 120.000 Available</Text>
        <TextInput
          style={styles.textInputTransfer}
          placeholder="0,00"
          keyboardType="numeric"
        />
        <View style={styles.textInputFlex}>
          <Icon
            style={styles.iconForm}
            name="pencil"
            size={24}
            color="#A9A9A999"
          />
          <TextInput placeholder="Add some notes" />
        </View>
      </View>

      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.textButton}>Confirm</Text>
      </TouchableOpacity>
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
  dataHistoryContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 25,
    backgroundColor: 'white',
    marginBottom: 20,
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
  amountAvail: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C7895',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  textInputTransfer: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 30,
  },
  textInputFlex: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 2,
  },
  iconForm: {
    padding: 15,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 20,
    marginLeft: 20,
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default InputAmount;
