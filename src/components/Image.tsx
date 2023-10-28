import {StyleSheet, Image} from 'react-native';
import React from 'react';

interface Props {
  source: string;
  width: string;
  height: string;
  resizeMode: string;
  position?: string;
  color?: string;
}

const GeneralImage = (props: Props) => {
  const {source, width, height, resizeMode, position, color} = props;
  return (
    <Image
      source={source}
      style={{
        ...styles.container,
        width,
        height,
        resizeMode,
        position,
        color,
      }}
    />
  );
};

export default GeneralImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
});
