import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screen
import Home from './Dashboard/Home';
import TopUp from './Dashboard/Topup/Topup';
import FindReceiver from './Dashboard/Transaction/FindReceiver';
import History from './Dashboard/History/History';
import Profile from './Dashboard/Profile/Profile';
// import TransactionStack from './TransactionStack';
// import ProfileStack from './ProfileStack';
// import HistoryStack from './HistoryStack';

const BottomTab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="money" size={size} color={color} />
          ),
        }}
        name="Transfer"
        component={FindReceiver}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
        name="TopUp"
        component={TopUp}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="file-text-o" size={size} color={color} />
          ),
        }}
        name="History"
        component={History}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabStack;
