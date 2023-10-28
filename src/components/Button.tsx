import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {GeneralButtonColor} from '../assets/color/colors';
import {Rubik} from '../assets/font/fontfamily';

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
}

const GeneralButton = (props: Props) => {
  const {
    title,
    onPress,
    backgroundColor,
    color,
    width,
    height,
    margin,
    fontSize,
    fontWeight,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, width, height}}>
      <Text
        style={{
          ...styles.text,
          color,
          fontSize,
          fontWeight,
          fontFamily: Rubik,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 327,
    borderRadius: 12,
    backgroundColor: GeneralButtonColor,
  },
});
