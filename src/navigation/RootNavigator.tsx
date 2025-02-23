import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullLoading from '../components/FullLoading';
import OnboardingScreen from '../pages/onboarding/OnboardingScreen';
import HomeNavigator from './HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingNavigator from './OnboardingNavigator';
import {Provider} from 'react-redux';
import store from '../store/store';
import CategoriesScreen from '../pages/onboarding/CategoriesScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(true);

  useEffect(() => {
    (async () => {
      if (isOnboarding) {
        setIsOnboarding(false);
        setIsLoading(false);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <FullLoading />;
  }

  return (
    <Provider store={store}>
      <RootStack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        {isOnboarding ? (
          <RootStack.Screen name="Home" component={HomeNavigator} />
        ) : (
          <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
        )}
      </RootStack.Navigator>
    </Provider>
  );
};

export default RootNavigator;
