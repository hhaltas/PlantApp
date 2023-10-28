import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GeneralButton from '../../components/Button';
import GeneralText from '../../components/Text';
import {
  GeneralButtonColor,
  GeneralButtonInsideTextColor,
  homeHeaderName,
} from '../../assets/color/colors';
import InputText from '../../components/InputText';
import {getCategories} from '../../redux/actions/categoryActions';
import {getQuestions} from '../../redux/actions/questionAction';
import {connect, useDispatch} from 'react-redux';
import ListItem from '../../components/ListItem';
import HorizontalList from '../../components/HorizontalList';
import PremiumBox from '../../components/PremiumBox';
type Props = {};

const Home = (props: Props) => {
  const [filterData, setFilterData] = useState(null);
  const [newList, setNewList] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getQuestions());
  }, []);

  const setSearchText = event => {
    setFilterData(event);
  };

  const setPremiumBox = () => {
    console.log('modal open');
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/homeBackgroundUpper.png')}
        style={{
          width: '100%',
          height: 175,
          resizeMode: 'contain',
        }}>
        <View style={{marginLeft: 25, marginTop: 45}}>
          <GeneralText
            title="Hi, plant lover!"
            fontSize={16}
            color={homeHeaderName}
            fontWeight={400}
            height={20}
            width={225}
          />
          <GeneralText
            title="Good Afternoon! ⛅"
            fontSize={24}
            color={homeHeaderName}
            fontWeight={500}
            height={28}
            width={225}
            lineHeight={28}
          />
          <InputText
            placeholder={'Search for plants'}
            handleChange={setSearchText}
            iconVisible={true}
            inputMode={'none'}
            value={filterData}
            design={'row'}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginLeft: 25,
          marginTop: 20,
          backgroundColor: 'rgba(251, 250, 250, 1)',
        }}>
        <PremiumBox
          onPress={setPremiumBox}
          title="FREE Premium Available"
          color={GeneralButtonInsideTextColor}
          fontWeight={500}
          width={327}
          height={60}
          borderWidth={1}
          borderColor={'rgba(36, 32, 26, 1)'}
          marginBottom={10}
          opacity={17}
          clicked={true}
          backgroundColor={'rgba(36, 32, 26, 1)'}
          detail="Tap to upgrade your accunt!"
          notification={'2'}
        />
        <GeneralText
          title="Get Started"
          fontSize={15}
          color={' rgba(19, 35, 27, 1)'}
          fontWeight={500}
          height={20}
          width={225}
        />

        <ListItem
          data={props?.questions}
          width={240}
          height={164}
          backgroundColor={'rgba(255,255,255,0.08)'}
          fontSize={17}
          fontWeight={'500'}
          color={'white'}
          disabled={false}
          horizontal={true}
        />

        <ListItem
          data={props?.categories}
          width={158}
          height={152}
          backgroundColor={'rgba(255,255,255,0.08)'}
          fontSize={16}
          fontWeight={'500'}
          color={'rgba(19, 35, 27, 1)'}
          disabled={false}
          horizontal={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    categories: state.categories.categories.data,
    questions: state.questions.questions,
  };
}

export default connect(mapStateToProps)(Home);

/*
 <ListItem
          data={props?.questions}
          width={200}
          height={140}
          backgroundColor={'rgba(255,255,255,0.08)'}
          fontSize={17}
          fontWeight={'500'}
          color={'white'}
          disabled={'false'}
          horizontal={true}
        />

*/
