import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const DiagnoseScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>DiagnoseScreen</Text>
    </View>
  );
};

export default DiagnoseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 10,
  },
});
