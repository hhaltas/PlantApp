import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullLoading from '../components/FullLoading';
import HomeNavigator from './HomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import {Provider} from 'react-redux';
import store from '../store/store';
import {getOnboardingItem} from '../utils/storage';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);

  const checkOnboardingStatus = async () => {
    const data = await getOnboardingItem('onBoarding');
    console.log('RootNavigator getOnboardingItem', data);
    setIsOnboarding(data);
  };

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  return (
    <Provider store={store}>
      <RootStack.Navigator
        initialRouteName={isOnboarding ? 'Home' : 'Onboarding'}
        testID="root-navigator"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={HomeNavigator} />
        <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
      </RootStack.Navigator>
    </Provider>
  );
};

export default RootNavigator;
