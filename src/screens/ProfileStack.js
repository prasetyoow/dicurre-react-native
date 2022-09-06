import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Profile from './Dashboard/Profile/PersonalInfo';
import PersonalInfo from './Dashboard/Profile/PersonalInfo';
import ChangePassword from './Dashboard/Profile/ChangePassword';
import ChangePIN from './Dashboard/Profile/ChangePIN';
import AddPhoneNum from './Dashboard/Profile/AddPhoneNum';
import ManagePhoneNum from './Dashboard/Profile/ManagePhoneNum';

const Stack = createNativeStackNavigator;

const ProfileStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePIN"
          component={ChangePIN}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPhoneNum"
          component={AddPhoneNum}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagePhoneNum"
          component={ManagePhoneNum}
          option={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileStack;
