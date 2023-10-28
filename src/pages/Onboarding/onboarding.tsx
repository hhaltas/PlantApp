import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import GeneralButton from '../../components/Button';
import GeneralText from '../../components/Text';
import GeneralImage from '../../components/Image';
import {
  LegalTextColor,
  GeneralButtonInsideTextColor,
} from '../../assets/color/colors';
type Props = {
  navigation: string;
};

const Onboarding = (props: Props) => {
  useEffect(() => {}, []);

  const onPressNavigation = () => {
    props.navigation?.navigate('onBoardingOne');
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/Background.png')}>
      <View style={{flex: 1}}>
        <View style={styles.headerSize}>
          <View style={styles.textHeaderUp}>
            <GeneralText
              title="Welcome to"
              fontSize={28}
              color={LegalTextColor}
              fontWeight={300}
            />
            <GeneralText
              title=" PlantApp"
              fontSize={28}
              color={LegalTextColor}
              fontWeight={400}
            />
          </View>
          <Text style={styles.textHeaderDetail}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
        <View style={{}}>
          <Image
            source={require('../../assets/images/Frame.png')}
            style={styles.imageStyle}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <GeneralButton
            onPress={onPressNavigation}
            title="Get Started"
            color={GeneralButtonInsideTextColor}
            fontWeight={600}
            width={327}
            height={50}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: '100%',
          }}>
          <GeneralText
            title="By tapping next, you are agreeing to PlantID"
            fontSize={11}
            color={LegalTextColor}
            fontWeight={400}
          />

          <View style={{flexDirection: 'row'}}>
            <GeneralText
              title="Terms of Use"
              fontSize={11}
              color={LegalTextColor}
              fontWeight={400}
              textDecorationLine="underline"
            />
            <GeneralText
              title=" & "
              fontSize={11}
              color={LegalTextColor}
              fontWeight={400}
            />
            <GeneralText
              title="Privacy Policy."
              fontSize={11}
              color={LegalTextColor}
              fontWeight={400}
              textDecorationLine="underline"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
