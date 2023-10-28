import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GeneralButtonColor} from '../assets/color/colors';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import {Rubik, SFPro} from '../assets/font/fontfamily';

interface Props {
  title: string;
  detail: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderWidth?: string;
  borderColor?: string;
  marginBottom?: string;
  opacity?: string;
  clicked?: boolean;
  badge?: string;
  notification: string;
}

const PremiumBox = (props: Props) => {
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
    borderColor,
    borderWidth,
    marginBottom,
    opacity,
    clicked,
    detail,
    badge,
    notification,
  } = props;

  useEffect(() => {
    console.log('clicked', clicked);
  }, [clicked]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          ...styles.container,
          width,
          height,
          backgroundColor,
          borderWidth,
          marginBottom,
          opacity,
          backgroundColor,
        },
      ]}>
      <View style={[styles.main]}>
        <TouchableOpacity onPress={onPress} style={styles.Touched}>
          <Image
            source={require('../assets/images/notification.png')}
            style={{
              width: 40,
              height: 32,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 2,
              right: 2,
              width: 15,
              height: 15,
              borderRadius: 10,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 8,
                fontWeight: '500',
                fontFamily: Rubik,
              }}>
              {notification}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.centerView}>
          <LinearGradientText
            colors={['rgba(229, 201, 144, 1)', 'rgba(228, 176, 70, 1)']}
            text={title}
            start={{x: 0, y: 1}}
            end={{x: 2, y: 4}}
            textStyle={{fontSize: 15, fontWeight: '700', fontFamily: SFPro}}
            textProps={{allowFontScaling: true}} // Optional
          />

          <LinearGradientText
            colors={['rgba(255, 222, 156, 0.8)', 'rgba(245, 194, 91, 0.8)']}
            text={detail}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 4}}
            textStyle={{fontSize: 13, fontWeight: '300', fontFamily: SFPro}}
            textProps={{allowFontScaling: true}} // Optional
          />
        </View>

        <View style={styles.Right}>
          <Image
            source={require('../assets/images/arrow.png')}
            style={{width: 24, height: 24, resizeMode: 'contain'}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 56,
    width: 327,
    borderRadius: 14,
  },
  main: {
    flexDirection: 'row',
  },
  centerView: {
    width: '72%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Touched: {
    marginLeft: 5,
    marginTop: 5,
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isClick: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isClicked: {
    width: 8,
    height: 8,
    borderRadius: 6,
    opacity: 10,
  },
  Right: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  textDetail: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: 'white',
    opacity: 0.7,
  },
  textRight: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: 'white',
  },
});
