import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  paywallBackgroundColor,
  GeneralButtonInsideTextColor,
  GeneralButtonColor,
} from '../../assets/color/colors';
import GeneralText from '../../components/Text';
import GeneralButton from '../../components/Button';
import PremiumButtom from '../../components/PremiumButton';
import HorizontalList from '../../components/HorizontalList';
import {PaywallData} from '../../config/config';
import {setStoreValue} from '../../components/AsyncStorageUtil';
import ModalAlert from '../../components/ModalCard';
type Props = {};

const Paywall = (props: Props) => {
  const [isMonth, setIsMonth] = useState(false);
  const [isYear, setIsYear] = useState(true);
  const [isVisible, setIsvisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const buyPaywallApi = () => {
    setTitle(2);
    setDescription('Are you sure you want to buy?');
    closedModal();
  };

  const onGoToNavigation = () => {
    props?.navigation?.navigate('Home');
  };

  const setPacketMonthbuy = () => {
    setIsMonth(true);
    setIsYear(false);
  };
  const setPacketYearbuy = () => {
    setIsYear(true);
    setIsMonth(false);
  };

  const closedModal = () => {
    setIsvisible(!isVisible);
  };

  const changedNavigation = () => {
    onGoToNavigation();
    closedModal();
  };

  return (
    <View style={{flex: 1, backgroundColor: paywallBackgroundColor}}>
      <ImageBackground
        source={require('../../assets/images/Image.png')}
        style={{
          width: 378,
          height: 571,
          top: -23,
          resizeMode: 'contain',
        }}></ImageBackground>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          marginLeft: 30,
          bottom: 20,
          flex: 1,
        }}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <GeneralText
              title="PlantApp "
              fontSize={27}
              color={GeneralButtonInsideTextColor}
              fontWeight={800}
              height={35}
              width={120}
              textAlign={'center'}
            />
            <GeneralText
              title="Premium"
              fontSize={27}
              color={GeneralButtonInsideTextColor}
              fontWeight={300}
              height={35}
              width={120}
              textAlign={'center'}
            />
          </View>
          <GeneralText
            title="Access All Features"
            fontSize={17}
            color={'rgba(255,255,255,0.7)'}
            fontWeight={'300'}
            height={20}
            width={157}
            lineHeight={24}
            textAlign={'center'}
          />
          <HorizontalList
            listItem={PaywallData}
            width={156}
            height={120}
            backgroundColor={'rgba(255,255,255,0.08)'}
            fontSize={20}
            fontWeight={'500'}
            color={'white'}
            disabled={'false'}
          />
          <PremiumButtom
            onPress={setPacketMonthbuy}
            title="1 Month"
            color={GeneralButtonInsideTextColor}
            fontWeight={500}
            width={327}
            height={60}
            borderWidth={2}
            borderColor={GeneralButtonColor}
            marginBottom={10}
            opacity={17}
            clicked={isMonth}
            detail="$2.99/month, auto renewable"
            badge=""
          />

          <PremiumButtom
            onPress={setPacketYearbuy}
            title="1 Year"
            color={GeneralButtonInsideTextColor}
            fontWeight={500}
            width={327}
            height={60}
            borderWidth={2}
            borderColor={GeneralButtonColor}
            marginBottom={20}
            opacity={17}
            clicked={isYear}
            detail="First 3 days free, then $529,99/year"
            badge="Save 50%"
          />
          <GeneralButton
            onPress={buyPaywallApi}
            title="Try free for 3 days"
            color={GeneralButtonInsideTextColor}
            fontWeight={500}
            width={327}
            height={52}
            fontSize={16}
            lineHeight={24}
          />
          <GeneralText
            title="After the 3-day free trial period you’ll be charged ₺274.99 per year unless you"
            fontSize={8}
            color={GeneralButtonInsideTextColor}
            fontWeight={300}
            opacity={0.5}
            height={12}
            width={320}
            textAlign={'center'}
            marginTop={10}
            padding={0}
          />
          <GeneralText
            title="cancel before the trial expires. Yearly Subscription is Auto-Renewable "
            fontSize={8}
            color={GeneralButtonInsideTextColor}
            fontWeight={300}
            opacity={0.5}
            height={12}
            width={327}
            textAlign={'center'}
            lineHeight={11}
            marginBottom={10}
          />
          <GeneralText
            title="Terms • Privacy • Restore"
            fontSize={11}
            color={GeneralButtonInsideTextColor}
            fontWeight={400}
            opacity={0.5}
            height={12}
            width={327}
            textAlign={'center'}
            lineHeight={11}
            marginBottom={15}
          />
        </View>
        <ModalAlert
          isVisible={isVisible}
          closedModal={closedModal}
          title={title}
          description={description}
          isClosed={true}
          isOK={true}
          navigate={false}
          changedNavigation={changedNavigation}
        />
      </View>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({});

/*



    
*/
