/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Article from '../screens/Article';
import {StackNavigator} from './StackNavigator';
import Chat from '../screens/Chat';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarPressColor: colors.pirmary,
        // tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.pirmary,
        },
        // tabBarStyle: {
        //   shadowColor:"transparent" //ios
        //   elevation: 0,
        // },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;

            case 'Chat':
              iconName = 'chatbox-outline';
              break;

            case 'Article':
              iconName = 'newspaper-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      style={{
        paddingTop,
      }}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
};
