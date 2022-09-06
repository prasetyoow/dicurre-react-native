import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notification = () => {
  return (
    <>
      {/* Top Navigation */}
      <View style={styles.topPersonalContainer}>
        <Icon name="arrow-left" size={30} color="#4D4B57" />
        <Text style={styles.textTop}>Notification</Text>
      </View>

      <Text style={styles.textMuted}>Today</Text>

      <View style={styles.dataNotifContainer}>
        <View style={styles.notifFlex}>
          <Icon
            style={styles.iconForm}
            name="arrow-down"
            size={20}
            color="#4CEDB3"
          />
          <View style={styles.textNotifFlex}>
            <Text>Transfered from Joshua Lee</Text>
            <Text style={styles.textNotif}>Rp. 220.000</Text>
          </View>
        </View>
      </View>

      <View style={styles.dataNotifContainer}>
        <View style={styles.notifFlex}>
          <Icon
            style={styles.iconForm}
            name="arrow-up"
            size={20}
            color="#FF5B37"
          />
          <View style={styles.textNotifFlex}>
            <Text>Netflix subscription</Text>
            <Text style={styles.textNotif}>Rp. 149.000</Text>
          </View>
        </View>
      </View>

      <Text style={styles.textMuted}>This Week</Text>

      <View style={styles.dataNotifContainer}>
        <View style={styles.notifFlex}>
          <Icon
            style={styles.iconForm}
            name="arrow-up"
            size={20}
            color="#FF5B37"
          />
          <View style={styles.textNotifFlex}>
            <Text>Transfer to Jessica Lee</Text>
            <Text style={styles.textNotif}>Rp. 100.000</Text>
          </View>
        </View>
      </View>

      <View style={styles.dataNotifContainer}>
        <View style={styles.notifFlex}>
          <Icon
            style={styles.iconForm}
            name="arrow-down"
            size={20}
            color="#4CEDB3"
          />
          <View style={styles.textNotifFlex}>
            <Text>Top up from BNI E-Banking</Text>
            <Text style={styles.textNotif}>Rp. 300.000</Text>
          </View>
        </View>
      </View>

      <View style={styles.dataNotifContainer}>
        <View style={styles.notifFlex}>
          <Icon
            style={styles.iconForm}
            name="arrow-up"
            size={20}
            color="#FF5B37"
          />
          <View style={styles.textNotifFlex}>
            <Text>Transfer to Mama Mia</Text>
            <Text style={styles.textNotif}>Rp. 50.000</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topPersonalContainer: {
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
  dataNotifContainer: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  iconForm: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
  },
  notifFlex: {
    flexDirection: 'row',
  },
  textNotif: {
    marginTop: 10,
  },
});

export default Notification;
