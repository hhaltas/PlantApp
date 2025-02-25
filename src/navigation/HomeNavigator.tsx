import {Image, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home/HomeScreen';
import DiagnoseScreen from '../pages/diagnose/DiagnoseScreen';
import CameraScreen from '../pages/Camera/CameraScreen';
import GardenScreen from '../pages/garden/GardenScreen';
import ProfileScreen from '../pages/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 85,
          backgroundColor: 'white',
          borderTopWidth: 0,
          position: 'absolute',
        },
        tabBarActiveTintColor: 'rgba(40, 175, 110, 1)',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={require('../assets/BarIcon/Home.png')}
              style={{width: 24, height: 24, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/BarIcon/diagnose.png')}
              style={{width: 24, height: 24, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: () => {
            <View></View>;
          },
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                position: 'absolute',
                top: -30,
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <View
                style={{
                  height: 68,
                  width: 68,
                  borderRadius: 58,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/BarIcon/scanButton.png')}
                  style={styles.cameraIcon}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Garden"
        component={GardenScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/BarIcon/healthcare.png')}
              style={{width: 24, height: 24, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/BarIcon/profile.png')}
              style={{width: 24, height: 24, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    backgroundColor: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
  cameraButton: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  cameraIcon: {
    width: 68,
    height: 68,
  },
});
