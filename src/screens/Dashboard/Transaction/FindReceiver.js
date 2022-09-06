import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const FindReceiver = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* Top Navigation */}
          <View style={styles.topReceiverContainer}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
            <Text style={styles.textTop}>Find Receiver</Text>
          </View>

          {/* Input search receiver */}
          <View style={styles.formFlex}>
            <Icon
              style={styles.iconForm}
              name="search"
              size={20}
              color="#A9A9A9"
            />
            <TextInput
              style={styles.textForm}
              placeholder="Search receiver here"
            />
          </View>

          {/* Quick Access */}
          <Text style={styles.textMid}>Quick Access</Text>

          {/* Quick Contact */}
          <View style={styles.contactFlex}>
            <View style={styles.contactContainer}>
              <Image
                style={styles.contactImage}
                source={require('../../../assets/images/jessica.png')}
              />
              <Text style={styles.textName}>Michi</Text>
              <Text style={styles.textPhone}>-9994</Text>
            </View>
            <View style={styles.contactContainer}>
              <Image
                style={styles.contactImage}
                source={require('../../../assets/images/momo.png')}
              />
              <Text style={styles.textName}>Dody</Text>
              <Text style={styles.textPhone}>-3561</Text>
            </View>
            <View style={styles.contactContainer}>
              <Image
                style={styles.contactImage}
                source={require('../../../assets/images/rian.png')}
              />
              <Text style={styles.textName}>Rian</Text>
              <Text style={styles.textPhone}>-3822</Text>
            </View>
          </View>

          {/* All Contact */}
          <Text style={styles.textMid}>All Contact</Text>
          <Text style={styles.textMuted}>17 Contacts Found</Text>

          <TouchableOpacity onPress={() => navigation.navigate('InputAmount')}>
            <View style={styles.dataHistoryContainer}>
              <View style={styles.dataHistoryFlex}>
                <View style={styles.profHistoryFlex}>
                  <Image
                    style={styles.dataHistoryImage}
                    source={require('../../../assets/images/suhi.png')}
                  />
                  <View style={styles.textHistoryFlex}>
                    <Text style={styles.dataNameHistory}>Samuel Suhi</Text>
                    <Text style={styles.textMutedHistory}>
                      +62 813-8492-9994
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/jessica.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Julia Syen</Text>
                  <Text style={styles.textMutedHistory}>+62 812-3942-3656</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/bobi.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Bobi Sammy</Text>
                  <Text style={styles.textMutedHistory}>+62 813-5982-2940</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.dataHistoryContainer}>
            <View style={styles.dataHistoryFlex}>
              <View style={styles.profHistoryFlex}>
                <Image
                  style={styles.dataHistoryImage}
                  source={require('../../../assets/images/juliana.png')}
                />
                <View style={styles.textHistoryFlex}>
                  <Text style={styles.dataNameHistory}>Juliana Rich</Text>
                  <Text style={styles.textMutedHistory}>+62 811-6212-5663</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
});

export default FindReceiver;
