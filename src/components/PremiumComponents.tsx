import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';

// 📌 Card Bileşeni
interface PremiumProps {
  image: string;
  title: string;
  description: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => {};
  selectColor?: string;
  data?: string;
}

const PremiumComponents: React.FC<PremiumProps> = ({
  title,
  description,
  width,
  height,
  backgroundColor,
  textColor,
  onPress,
  selectColor,
  data,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width,
          height,
          backgroundColor,
          borderColor: selectColor ? selectColor : '',
        },
      ]}>
      <Image
        source={require('../assets/home/Icon.png')}
        style={{width: 40, height: 40, marginLeft: 0, resizeMode: 'contain'}}
      />
      <View style={{flexDirection: 'column', width: '70%'}}>
        <Text style={[styles.title, {color: textColor ? textColor : 'white'}]}>
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            {color: textColor ? textColor : 'white'},
          ]}>
          {description}
        </Text>
      </View>
      <View style={{width: '15%', alignItems: 'flex-end'}}>
        <Image
          source={require('../assets/home/arrow.png')}
          style={{width: 24, height: 24, resizeMode: 'contain'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PremiumComponents;

const styles = StyleSheet.create({
  card: {
    width: 325,
    height: 65,
    backgroundColor: '#24201A',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 14,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5, // Android gölge efekti
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    paddingLeft: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    paddingLeft: 10,
  },
});
