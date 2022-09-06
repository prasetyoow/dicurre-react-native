import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Details from './Dashboard/History/Details';
import History from './Dashboard/History/History';

const Stack = createNativeStackNavigator;

const HistoryStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Details"
          component={Details}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          option={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HistoryStack;
