import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  color: string;
  textColor: string;
}

const MainButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  textColor,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color ? color : 'white'}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
  },
});
