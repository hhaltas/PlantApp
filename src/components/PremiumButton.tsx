import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GeneralButtonColor} from '../assets/color/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Rubik} from '../assets/font/fontfamily';

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
}

const PremiumButtom = (props: Props) => {
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

          borderWidth,
          marginBottom,
          opacity,
        },
        {
          borderColor: clicked ? borderColor : '#2D3934',
          backgroundColor: 'rgba(255,255,255,0.05)',
        },
      ]}>
      {clicked ? (
        <LinearGradient
          colors={['rgba(40, 175, 110, 0)', 'rgba(40, 175, 110, 0.17)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{flex: 1, width, height, borderRadius: 14}}>
          <View style={[styles.main]}>
            <TouchableOpacity onPress={onPress} style={styles.Touched}>
              <View
                style={[
                  styles.isClick,
                  {
                    backgroundColor:
                      clicked && 1 ? GeneralButtonColor : '#2E3A35',
                    bottom: clicked ? 0 : 11,
                    right: clicked ? 0 : 9,
                  },
                ]}>
                <View
                  style={[
                    styles.isClicked,
                    {backgroundColor: clicked && 1 ? 'white' : '#2E3A35'},
                  ]}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.centerView}>
              <Text
                style={{
                  ...styles.textHeader,
                  color,
                  fontWeight,
                  fontFamily: Rubik,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  ...styles.textDetail,
                  color,
                  fontWeight,
                  fontFamily: Rubik,
                }}>
                {detail}
              </Text>
            </View>
            {badge && (
              <View
                style={[
                  styles.Right,
                  {
                    backgroundColor: clicked ? GeneralButtonColor : '#2E3A35',
                    bottom: 7,
                    right: 9,
                  },
                ]}>
                <Text
                  style={{
                    ...styles.textRight,
                    color,
                    fontWeight,
                    fontFamily: Rubik,
                  }}>
                  {badge}
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>
      ) : (
        <View style={[styles.main]}>
          <TouchableOpacity onPress={onPress} style={styles.Touched}>
            <View
              style={[
                styles.isClick,
                {
                  backgroundColor:
                    clicked && 1 ? GeneralButtonColor : '#2E3A35',
                },
              ]}>
              <View
                style={[
                  styles.isClicked,
                  {backgroundColor: clicked && 1 ? 'white' : '#2E3A35'},
                ]}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.centerView}>
            <Text
              style={{
                ...styles.textHeader,
                color,
                fontWeight,
                fontFamily: Rubik,
              }}>
              {title}
            </Text>
            <Text
              style={{
                ...styles.textDetail,
                color,
                fontWeight,
                fontFamily: Rubik,
              }}>
              {detail}
            </Text>
          </View>
          {badge && (
            <View
              style={[
                styles.Right,
                {
                  backgroundColor: clicked ? GeneralButtonColor : '#2E3A35',
                  bottom: 11,
                  right: 9,
                },
              ]}>
              <Text
                style={{
                  ...styles.textRight,
                  color,
                  fontWeight,
                  fontFamily: Rubik,
                }}>
                {badge}
              </Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PremiumButtom;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 14,
  },
  main: {
    flexDirection: 'row',
    marginTop: 5,
  },
  centerView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Touched: {
    margin: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
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
    width: 80,
    height: 26,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
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
