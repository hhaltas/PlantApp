import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const CameraScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 10,
  },
});
