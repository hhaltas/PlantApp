import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {removeOnboardingItem} from '../../utils/storage';
import {TextInput} from 'react-native-paper';
import PremiumComponents from '../../components/PremiumComponents';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestions} from '../../store/reducer/questionsSlice';
import QuestionsScreen from '../onboarding/QuestionsScreen';
import QuestionCard from '../../components/QuestionCard';
import {fetchCategories} from '../../store/reducer/categoriesSlice';

type Props = {};

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const {questions, loading, error} = useSelector(
    (state: RootState) => state.questions,
  );

  const {categories} = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
    console.log('questions', categories);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.upText}>Hi, plant lover!</Text>
        <Text style={styles.downText}> Good Afternoon!</Text>
      </View>
      <View style={{height: 70}}>
        <ImageBackground
          source={require('../../assets/home/searchBackground.png')}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode="contain">
          <View
            style={{
              height: 40,
              width: '90%',
              flexDirection: 'row',
              backgroundColor: 'rgba(255,255,255,0.88)',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/home/search.png')}
              style={{width: 20, height: 20, marginLeft: 10}}
              resizeMode="contain"
            />
            <TextInput
              style={{
                height: '100%',
                width: '90%',
                backgroundColor: 'transparent',
              }}
              placeholder={'Search for plants'}
              placeholderTextColor={'gray'}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{height: 100}}>
        <PremiumComponents
          title={'FREE Premium Available'}
          description="Tap to upgrade your account!"
          backgroundColor="#24201A"
          width={'90%'}
          height={64}
          textColor="#E4B046"
        />
      </View>
      <View style={{height: 200}}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 10,
          }}>
          Get Started
        </Text>
        <FlatList
          data={questions}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <QuestionCard
              source={item.image_uri}
              title={item.title}
              width={240}
              height={164}
            />
          )}
        />
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <FlatList
          data={categories}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <QuestionCard
              source={item?.image?.url}
              title={item.title}
              width={175}
              height={152}
              textColor="#13231B"
              borderColor="#F4F6F6"
            />
          )}
        />
      </View>
      {/* <TouchableOpacity
        onPress={async () => {
          await removeOnboardingItem('onBoarding');
        }}>
        <Text>SİL REMOVE </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  header: {marginLeft: 30, flexDirection: 'column'},
  upText: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    color: '#13231B',
  },
  downText: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28,
    color: '#13231B',
  },
});
