import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const FullLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating color={'green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
});

export default FullLoading;
