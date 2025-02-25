import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const GardenScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>GardenScreen</Text>
    </View>
  );
};

export default GardenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 10,
  },
});
