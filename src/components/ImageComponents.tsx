import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface ImageProps {
  source: string;
  width?: number;
  height?: number;
  position?: string;
  still?: string;
}

const StandaloneImage: React.FC<ImageProps> = ({
  source,
  width = 200,
  height = 200,
  position,
  still,
}) => {
  return (
    <Image
      source={source}
      style={[styles.image, {width, height, position}, still]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default StandaloneImage;
