import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Home,
  GoNewsDetail,
  Orders,
  Inbox,
  Help,
  Account,
} from '../../containers/pages';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    /* bottom tab react navigation */
    <Tab.Navigator
      initialRouteName="Beranda"
      labelStyle={styles.labelTab}
      screenOptions={({route}) => ({
        tabBarStyle: {paddingBottom: 5, paddingTop: 5},
        tabBarBadgeStyle: {paddingTop: 2, top: -3},
        tabBarActiveTintColor: '#61A756',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <FontAwesome name="list-ul" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="help-circle"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarBadge: 3,
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="inbox" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="GoNewsDetail" component={GoNewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  labelTab: {
    fontSize: 12,
  },
});
