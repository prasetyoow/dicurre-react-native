import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTabStack from './HomeTabStack';
import Details from '../screens/Dashboard/History/Details';
import PersonalInfo from '../screens/Dashboard/Profile/PersonalInfo';
import EditPicture from '../screens/Dashboard/Profile/EditPicture';
import ChangePassword from '../screens/Dashboard/Profile/ChangePassword';
import ChangePIN from '../screens/Dashboard/Profile/ChangePIN';
import InputAmount from '../screens/Dashboard/Transaction/InputAmount';
import Confirmation from '../screens/Dashboard/Transaction/Confirmation';
import EnterPIN from '../screens/Dashboard/Transaction/EnterPIN';
import TransferSuccess from '../screens/Dashboard/Transaction/TransferSuccess';
import TransferSuccessHistory from '../screens/Dashboard/Transaction/TransferSuccessHistory';
import TransferFailed from '../screens/Dashboard/Transaction/TransferFailed';
import ManagePhoneNum from '../screens/Dashboard/Profile/ManagePhoneNum';
import AddPhoneNum from './Dashboard/Profile/AddPhoneNum';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPicture"
        component={EditPicture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPhone"
        component={ManagePhoneNum}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPhoneNum"
        component={AddPhoneNum}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePIN"
        component={ChangePIN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputAmount"
        component={InputAmount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterPIN"
        component={EnterPIN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccess"
        component={TransferSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccessHistory"
        component={TransferSuccessHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferFailed"
        component={TransferFailed}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
