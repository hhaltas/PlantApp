import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
import OnboardingScreen from '../pages/onboarding/OnboardingScreen';
import QuestionsScreen from '../pages/onboarding/QuestionsScreen';
import CategoriesScreen from '../pages/onboarding/CategoriesScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const OnboardingNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
