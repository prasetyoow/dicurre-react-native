import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ListHistory = ({item}) => {
  return (
    <View style={styles.dataHistoryContainer}>
      <View style={styles.dataHistoryFlex}>
        <View style={styles.profHistoryFlex}>
          <Image
            style={styles.dataHistoryImage}
            source={
              item.picture === null || item.penerima_photo === null
                ? require('../assets/images/defaultProfile.png')
                : {
                    uri:
                      'http://192.168.1.10:8787/public/uploads/' +
                      item.penerima_photo,
                  }
            }
          />
          <View style={styles.textHistoryFlex}>
            <Text style={styles.dataNameHistory}>{item.penerima_fullname}</Text>
            <Text style={styles.textMutedHistory}>{item.tipe_transaksi}</Text>
          </View>
        </View>
        <View>
          {item.tipe_transaksi === 'Transfer' ? (
            <Text style={styles.dataDanger}>- {item.amount}</Text>
          ) : (
            <Text style={styles.dataSuccess}>+ {item.amount}</Text>
          )}
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

export default ListHistory;
