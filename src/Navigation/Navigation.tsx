import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from '../redux/store';

//Page List
import Onboarding from '../pages/Onboarding/onboarding';
import OnBoardingPage1 from '../pages/Onboarding/onBoardingPage1';
import OnBoardingPage2 from '../pages/Onboarding/onBoardingPage2';
import Paywall from '../pages/Paywall/paywall';
import Home from '../pages/Home/home';
import Diagnose from '../pages/Diagnose/diagnose';
import Garden from '../pages/Garden/garden';
import Profile from '../pages/Profile/profile';
import PayScreenModal from '../pages/Camera/camera';
import {Image, Text} from 'react-native';
import {
  GeneralButtonColor,
  GeneralButtonInsideTextColor,
} from '../assets/color/colors';
import {getStoreObject} from '../components/AsyncStorageUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
type Props = {};

const PayScreenComponent = () => {
  return null;
};
const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          headerShown: false,
          tabBarOptions: {
            showIcon: true,
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '400',
                  color: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/BottomTabs/home.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={Diagnose}
        options={{
          headerShown: false,
          tabBarOptions: {
            showIcon: true,
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '400',
                  color: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}>
                Diagnose
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/BottomTabs/healtcare.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreenComponent}
        options={{
          tabBarButton: () => <PayScreenModal />,
        }}
      />
      <Tab.Screen
        name="Garden"
        component={Garden}
        options={{
          headerShown: false,
          tabBarOptions: {
            showIcon: true,
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '400',
                  color: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}>
                My Garden
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/BottomTabs/garden.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarOptions: {
            showIcon: true,
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '400',
                  color: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}>
                Profile
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/images/BottomTabs/profile.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: focused
                    ? GeneralButtonColor
                    : 'rgba(151, 151, 152, 1)',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = (props: Props) => {
  const [packet, setPacket] = useState(null);
  const [data, setData] = useState([]);
  const [onGoToNavigatin, setonGoToNavigatin] = useState(null);
  const [retrieve, setRetrieve] = useState(true);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const valueString = await getStoreObject('subscriberType');

        console.log('value', valueString);
        // Other set states
        setData(valueString);
      } catch (error) {
        console.log(error);
      }
    };
    if (retrieve) {
      retrieveData();
      setRetrieve(false);
    }
    console.log('Navigation', packet, retrieve, data.length);
  }, [retrieve]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            data?.length == undefined ? 'onBoardingStart' : 'Home'
          }
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="onBoardingStart"
            component={Onboarding}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen name="onBoardingOne" component={OnBoardingPage1} />
          <Stack.Screen name="onBoardingTwo" component={OnBoardingPage2} />
          <Stack.Screen name="Paywall" component={Paywall} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
