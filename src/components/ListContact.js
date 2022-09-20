import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ListContact = ({item}) => {
  return (
    <View style={styles.dataHistoryContainer}>
      <View style={styles.dataHistoryFlex}>
        <View style={styles.profHistoryFlex}>
          <Image
            style={styles.dataHistoryImage}
            source={
              item.picture === null
                ? require('../assets/images/defaultProfile.png')
                : {
                    uri:
                      'http://192.168.1.10:8888/public/uploads/' + item.picture,
                  }
            }
          />
          <View>
            <Text style={styles.dataNameHistory}>{item.fullname}</Text>
            <Text style={styles.textMutedHistory}>{item.phone_number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ListContact;
