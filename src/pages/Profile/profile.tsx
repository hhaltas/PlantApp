import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  getStoreObject,
  removeStoreValue,
} from '../../components/AsyncStorageUtil';
import {GeneralButtonInsideTextColor} from '../../assets/color/colors';
import GeneralButton from '../../components/Button';

type Props = {};

const Profile = (props: Props) => {
  const onPressNavigation = async () => {
    const temp = await removeStoreValue('subscriberType');
    console.log('temp', temp);
    const temp2 = await getStoreObject('subscriberType');
    console.log('temp2');
    props.navigation.navigate('onBoardingStart');
  };
  return (
    <SafeAreaView>
      <View style={{margin: 30}}>
        <Text style={{marginBottom: 20}}>profile</Text>
        <GeneralButton
          onPress={onPressNavigation}
          title="Delete Subscrible"
          color={GeneralButtonInsideTextColor}
          fontWeight={600}
          width={327}
          height={50}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
