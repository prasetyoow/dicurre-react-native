import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screen
import LoginScreen from '../screens/Login';
// import Home from './Dashboard/Home';
import HomeStack from './HomeStack';
// import HomeTabStack from './HomeTabStack';
import SignupScreen from '../screens/Signup';
import CreatePinScreen from '../screens/CreatePIN/CreatePinScreen';
import CreatePinSuccess from '../screens/CreatePIN/PinSuccessScreen';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import NewPassword from '../screens/ResetPassword/NewPassword';
// import PersonalInfo from '../screens/Dashboard/Profile/PersonalInfo';
// import ChangePassword from '../screens/Dashboard/Profile/ChangePassword';
// import ChangePIN from '../screens/Dashboard/Profile/ChangePIN';
// import InputAmount from '../screens/Dashboard/Transaction/InputAmount';
// import Confirmation from '../screens/Dashboard/Transaction/Confirmation';
// import EnterPIN from '../screens/Dashboard/Transaction/EnterPIN';
// import TransferSuccess from '../screens/Dashboard/Transaction/TransferSuccess';
// import Details from '../screens/Dashboard/History/Details';

import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          {token ? (
            <Stack.Screen
              options={{headerShown: false}}
              name="HomeStack"
              component={HomeStack}
            />
          ) : (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Signup"
                component={SignupScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="CreatePIN"
                component={CreatePinScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="CreatePINSuccess"
                component={CreatePinSuccess}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="ResetPassword"
                component={ResetPassword}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="NewPassword"
                component={NewPassword}
              />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
