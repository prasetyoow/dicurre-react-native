import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

// components
import {PRIMARY_COLOR} from '../../../assets/styles/coloring';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Top Navigation */}
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topPersonalContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={30} color="#4D4B57" />
            </TouchableOpacity>
            <Text style={styles.textTop}>Change Password</Text>
          </View>

          <Text style={styles.textMuted}>
            You must enter your current password and then type your new password
            twice.
          </Text>

          <View style={styles.container}>
            <View style={styles.iconInput}>
              <Icon name="lock" size={24} color={PRIMARY_COLOR} />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter your current password"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.iconInput}>
              <Icon name="lock" size={24} color={PRIMARY_COLOR} />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter your new password"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.iconInput}>
              <Icon name="lock" size={24} color={PRIMARY_COLOR} />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Repeat your new password"
                keyboardType="email-address"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.textButton}>Change Password</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
    marginTop: 15,
    padding: 15,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  formChange: {
    padding: 15,
  },
  containerButton: {
    backgroundColor: '#6379F4',
    width: '90%',
    padding: 15,
    marginLeft: 20,
    marginTop: 170,
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 25,
    flexDirection: 'row',
    margin: 15,
  },
  containerIcon: {
    flexDirection: 'row',
  },
  iconInput: {
    margin: 10,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
  },
});

export default ChangePassword;
