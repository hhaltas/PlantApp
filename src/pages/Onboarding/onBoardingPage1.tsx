import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import GeneralButton from '../../components/Button';
import GeneralText from '../../components/Text';
import {
  GeneralButtonInsideTextColor,
  TextColor,
  onBoardingPageOneBackground,
} from '../../assets/color/colors';
type Props = {};

const OnboardingPage1 = (props: Props) => {
  const onPressNavigation = () => {
    props.navigation.navigate('onBoardingTwo');
  };
  return (
    <View style={{flex: 1, backgroundColor: onBoardingPageOneBackground}}>
      <View style={{flex: 1}}>
        <View style={styles.headerSizeOne}>
          <View style={styles.textHeaderUpOne}>
            <View style={{flexDirection: 'row'}}>
              <GeneralText
                title="Take a photo to "
                fontSize={28}
                color={TextColor}
                fontWeight={400}
                lineHeight={33}
              />
              <GeneralText
                title="identify"
                fontSize={28}
                color={TextColor}
                fontWeight={800}
                lineHeight={33}
              />
            </View>
            <GeneralText
              title="the plant!"
              fontSize={28}
              color={TextColor}
              fontWeight={400}
              lineHeight={33}
            />
          </View>
        </View>
        <Image
          source={require('../../assets/images/Brush.png')}
          style={styles.imageRectangeStyle}
        />
        <Image
          source={require('../../assets/images/Content.png')}
          style={styles.imageContentStyle}
        />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
              source={require('../../assets/images/Pattrince.png')}
              style={styles.imageSliderStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingPage1;
