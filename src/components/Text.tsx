import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Rubik} from '../assets/font/fontfamily';

interface Props {
  title: string;
  textDecorationLine: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight: string;
  lineHeight: string;
  opacity: string;
  textAlign?: string;
  width?: string;
  height?: string;
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
}

const GeneralText = (props: Props) => {
  const {
    title,
    color,
    textDecorationLine,
    fontSize,
    fontWeight,
    opacity,
    lineHeight,
    textAlign,
    height,
    width,
    padding,
    marginTop,
    marginBottom,
  } = props;
  return (
    <Text
      style={{
        ...styles.text,
        color,
        textDecorationLine,
        fontWeight,
        fontSize,
        opacity,
        lineHeight,
        textAlign,
        width,
        height,
        padding,
        marginTop,
        marginBottom,
        fontFamily: Rubik,
      }}>
      {title}
    </Text>
  );
};

export default GeneralText;

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    letterSpacing: 0.07,
    lineHeight: 15,
    opacity: 0.7,
  },
});
