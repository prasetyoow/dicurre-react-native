import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// style
// import styles from './src/styles/global';

// components
// import CustomInput from './src/components/CustomInput';

// navigation
// import Navigation from './src/components/navigation';
// import LoginScreen from './src/screens/Login/LoginScreen';
// import SignupScreen from './src/screens/Signup/SignupScreen';
// import ForgotPassword from './src/screens/ResetPassword/ResetPassword';
// import NewPassword from './src/screens/ResetPassword/NewPassword';
// import CreatePinScreen from './src/screens/CreatePIN/CreatePinScreen';
// import PinSuccessScreen from './src/screens/CreatePIN/PinSuccessScreen';
// import Home from './src/screens/Dashboard/Home';
// import Details from './src/screens/Dashboard/Details';
// import History from './src/screens/Dashboard/History';
// import FindReceiver from './src/screens/Dashboard/FindReceiver';
// import InputAmount from './src/screens/Dashboard/InputAmount';
// import Confirmation from './src/screens/Dashboard/Confirmation';
// import EnterPIN from './src/screens/Dashboard/EnterPIN';
// import TransferSuccess from './src/screens/Dashboard/TransferSuccess';
import TransferFailed from './src/screens/Dashboard/Transaction/TransferFailed';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={SignupScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="ForgotPass"
    //       component={ForgotPassword}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="NewPass"
    //       component={NewPassword}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="CreatePIN"
    //       component={CreatePinScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="CreatePINSuccess"
    //       component={PinSuccessScreen}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <TransferFailed />
    </View>
  );
};

export default App;
