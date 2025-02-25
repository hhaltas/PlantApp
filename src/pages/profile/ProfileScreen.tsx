import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 10,
  },
});
