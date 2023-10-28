import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import GeneralButton from '../../components/Button';
import GeneralText from '../../components/Text';
import {
  TextColor,
  GeneralButtonInsideTextColor,
} from '../../assets/color/colors';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};

const OnboardingPage2 = (props: Props) => {
  useEffect(() => {}, []);
  const onPressNavigation = () => {
    props.navigation.navigate('Paywall');
  };

  return (
    <LinearGradient colors={['#F8FAFF', '#FAFAFA']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.headerSizeOne}>
          <View style={styles.textHeaderUpOne}>
            <View style={{flexDirection: 'row'}}>
              <GeneralText
                title="Get plant "
                fontSize={28}
                color={TextColor}
                fontWeight={400}
                lineHeight={33}
              />
              <GeneralText
                title="care guides"
                fontSize={28}
                color={TextColor}
                fontWeight={800}
                lineHeight={33}
              />
            </View>
          </View>
        </View>
        <Image
          source={require('../../assets/images/Brush.png')}
          style={styles.imageRectangeStyleTwo}
        />
        <Image
          source={require('../../assets/images/Object.png')}
          style={styles.imageObjectStyle}
        />

        <Image
          source={require('../../assets/images/FlatiPhone.png')}
          style={styles.imagePhoneStyle}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/Artwork.png')}
          style={styles.imageArtworkStyle}
        />

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 45,
            position: 'absolute',
          }}>
          <GeneralButton
            onPress={onPressNavigation}
            title="Continue"
            color={GeneralButtonInsideTextColor}
            fontWeight={600}
            width={327}
            height={50}
          />
          <View style={{marginTop: 20}}>
            <Image
              source={require('../../assets/images/Pattrince1.png')}
              style={styles.imageSliderStyle}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OnboardingPage2;
