import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import FindReceiver from './Dashboard/Transaction/FindReceiver';
import InputAmount from './Dashboard/Transaction/InputAmount';
import Confirmation from './Dashboard/Transaction/Confirmation';
import EnterPIN from './Dashboard/Transaction/EnterPIN';
import TransferSuccess from './Dashboard/Transaction/TransferSuccess';
import TransferFailed from './Dashboard/Transaction/TransferFailed';

const Stack = createNativeStackNavigator;

const TransactionStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Find"
          component={FindReceiver}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="InputAmount"
          component={InputAmount}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPIN"
          component={EnterPIN}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferFailed"
          component={TransferFailed}
          option={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TransactionStack;
