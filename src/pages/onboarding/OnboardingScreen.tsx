import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MainButton from '../../components/MainButton';
import StandaloneImage from '../../components/ImageComponents';
import LinearGradient from 'react-native-linear-gradient';
import CardComponent from '../../components/CardComponents';
import CardSalesComponents from '../../components/PremiumComponents';
import {getOnboardingItem, setOnboardingItem} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [next, setNext] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    {
      id: '1',
      image: require('../../assets/paywall/unlimited.png'),
      title: 'Unlimited',
      description: 'Plant Identify',
    },
    {
      id: '2',
      image: require('../../assets/paywall/faster.png'),
      title: 'Faster',
      description: 'Process',
    },
    {
      id: '3',
      image: require('../../assets/paywall/detail.png'),
      title: 'Detailed',
      description: 'Plant care',
    },
  ];

  const sales = [
    {
      id: '1',
      title: '1 Month',
      description: '$2.99/month, auto renewable',
      save: null,
    },
    {
      id: '2',
      title: '1 Year',
      description: 'First 3 days free, then $529.99/year',
      save: '50%',
    },
  ];

  const onNextStepOne = () => {
    setNext(1);
  };

  const onNextStepTwo = () => {
    setNext(2);
  };

  const onNextStepThree = () => {
    setNext(3);
  };

  const onPressSalesBuy = async () => {
    if (selectedId == null) {
      console.log('İd seçilmedi ', selectedId);
    } else {
      console.log('satın alma işlemi tamamlandı ', navigation);
      await setOnboardingItem('onBoarding', selectedItem);
      navigation.navigate('Home');
    }
  };

  const OpenPageOne = () => {
    return (
      <ImageBackground
        source={require('../../assets/Onboarding/Background.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{margin: 30}}>
            <View style={styles.header}>
              <View style={styles.headerUp}>
                <Text style={styles.headerUpTextOne}>Welcome to </Text>
                <Text style={styles.headerUpTextTwo}>PlantApp</Text>
              </View>
              <View style={styles.headerDown}>
                <Text style={styles.headerDownText}>
                  Identify more than 3000+ plants and 88% accuray.
                </Text>
              </View>
            </View>
            <View style={styles.main}>
              <StandaloneImage
                source={require('../../assets/Onboarding/Frame.png')}
                still={{width: '100%', height: '100%', position: 'absolute'}}
              />
            </View>
            <View style={{marginTop: 10}}>
              <MainButton
                onPress={onNextStepOne}
                text="Get Started"
                textColor="rgba(255,255,255,1)"
                color="rgba(40,175,110,1)"
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.termAndPolicy}>
                  <Text style={styles.termAndPolicyDownText}>
                    By tapping next, you are agreeing to PlantID
                  </Text>

                  <View style={styles.termAndPolicyDown}>
                    <TouchableOpacity>
                      <Text style={styles.termAndPolicyDownTextOne}>
                        Terms of Use
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.termAndPolicyDownText}> & </Text>
                    <TouchableOpacity>
                      <Text style={styles.termAndPolicyDownTextOne}>
                        Privacy Policy
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const OpenPageTwo = () => {
    return (
      <ImageBackground
        source={require('../../assets/screen1/Background.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{margin: 20, marginTop: 50}}>
            <View style={styles.title}>
              <View style={styles.titleUp}>
                <Text style={styles.titleUpTextOne}>Take a photo to </Text>
                <Text style={styles.titleUpTextTwo}>identify </Text>
              </View>
              <StandaloneImage
                source={require('../../assets/screen1/Object.png')}
                still={{
                  width: 142,
                  height: 32,
                  position: 'absolute',
                  marginTop: 28,
                  right: 0,
                }}
              />
              <View>
                <Text style={styles.titleUpTextOne}>the plant! </Text>
              </View>
            </View>

            <View style={styles.main2}>
              <StandaloneImage
                source={require('../../assets/screen1/Content.png')}
                still={{width: '100%', height: '120%', position: 'absolute'}}
              />
            </View>
            <View style={{marginTop: 15}}>
              <MainButton
                onPress={onNextStepTwo}
                text="Continue"
                textColor="rgba(255,255,255,1)"
                color="rgba(40,175,110,1)"
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setNext(1);
                }}>
                <View
                  style={{
                    backgroundColor:
                      next === 1
                        ? 'rgba(19, 35, 27, 1)'
                        : 'rgba(19, 35, 27, 0.25)',
                    width: next === 1 ? 10 : 6,
                    height: next === 1 ? 10 : 6,
                    borderRadius: 5,
                    margin: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setNext(2);
                }}>
                <View
                  style={{
                    backgroundColor:
                      next === 2
                        ? 'rgba(19, 35, 27, 1)'
                        : 'rgba(19, 35, 27, 0.25)',
                    width: next === 2 ? 10 : 6,
                    height: next === 2 ? 10 : 6,
                    borderRadius: 5,
                    margin: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setNext(3);
                }}>
                <View
                  style={{
                    backgroundColor:
                      next === 3
                        ? 'rgba(19, 35, 27, 1)'
                        : 'rgba(19, 35, 27, 0.25)',
                    width: next === 3 ? 10 : 6,
                    height: next === 3 ? 10 : 6,
                    borderRadius: 5,
                    margin: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const OpenPageThree = () => {
    return (
      <ImageBackground
        source={require('../../assets/screen2/Background.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <View style={{marginLeft: 20, marginRight: 20}}>
              <View style={styles.header}>
                <View style={styles.headerUp}>
                  <Text style={styles.titleUpTextOne}>Get plant </Text>
                  <Text style={styles.titleUpTextTwo}>care guides</Text>
                </View>
                <StandaloneImage
                  source={require('../../assets/screen1/Object.png')}
                  still={{
                    width: 180,
                    height: 40,
                    position: 'absolute',
                    marginTop: 30,
                    right: 10,
                  }}
                />
              </View>
              <View style={[styles.mainScreen2]}>
                <StandaloneImage
                  source={require('../../assets/screen2/Object.png')}
                  still={{
                    width: 400,
                    height: 450,
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    transform: [{rotate: '-20deg'}],
                    borderTopColor: 'red',
                    resizeMode: 'contain',
                  }}
                />
                <View style={styles.containerOver}>
                  <StandaloneImage
                    source={require('../../assets/screen2/FlatIphone.png')}
                    still={{
                      marginLeft: 20,
                      width: '90%',
                      height: '110%',
                      position: 'absolute',
                    }}
                  />
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']} // Üstü saydam, altı koyu
                    style={styles.overlay}
                  />
                </View>

                <StandaloneImage
                  source={require('../../assets/screen2/Artwork.png')}
                  still={{
                    width: 400,
                    height: 200,
                    resizeMode: 'contain',
                    position: 'absolute',
                  }}
                />
              </View>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                style={[styles.linearGradient]}>
                <MainButton
                  onPress={onNextStepThree}
                  text="Get Started"
                  textColor="rgba(255,255,255,1)"
                  color="rgba(40,175,110,1)"
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setNext(1);
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          next === 1
                            ? 'rgba(19, 35, 27, 1)'
                            : 'rgba(19, 35, 27, 0.25)',
                        width: next === 1 ? 10 : 6,
                        height: next === 1 ? 10 : 6,
                        borderRadius: 5,
                        margin: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setNext(2);
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          next === 2
                            ? 'rgba(19, 35, 27, 1)'
                            : 'rgba(19, 35, 27, 0.25)',
                        width: next === 2 ? 10 : 6,
                        height: next === 2 ? 10 : 6,
                        borderRadius: 5,
                        margin: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setNext(3);
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          next === 3
                            ? 'rgba(19, 35, 27, 1)'
                            : 'rgba(19, 35, 27, 0.25)',
                        width: next === 3 ? 10 : 6,
                        height: next === 3 ? 10 : 6,
                        borderRadius: 5,
                        margin: 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const PaywallScreen = () => {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['rgba(16, 30, 23, 1)', 'rgba(16, 30, 23, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{width: '100%', height: '100%'}}>
          <ImageBackground
            source={require('../../assets/paywall/BackgroundUP.png')}
            style={{width: '100%', height: 520}}
            resizeMode="contain">
            <View
              style={{
                width: '100%',
                height: 500,
                marginTop: 270,
                padding: 10,
              }}>
              <View style={styles.containerPaywall}>
                <View style={styles.paywallHeader}>
                  <View style={styles.paywallHeaderUp}>
                    <Text style={styles.paywallHeaderTextUp}>PlantApp </Text>
                    <Text style={styles.paywallHeaderTextDown}>Premium</Text>
                  </View>

                  <Text style={styles.paywallHeaderText}>
                    Access All Features
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 150,
                    paddingTop: 10,
                  }}>
                  <FlatList
                    data={data}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <CardComponent
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        backgroundColor="rgba(255, 255, 255, 0.08)"
                        width={140}
                        height={130}
                        textColor={'rgba(255, 255, 255, 1)'}
                      />
                    )}
                    contentContainerStyle={styles.list}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View style={styles.paywallSales}>
                  <View
                    style={{
                      width: '103%',
                      height: 150,
                      paddingTop: 10,
                    }}>
                    {sales.map(item => {
                      const isSelected = item.id === selectedId;
                      return (
                        <TouchableOpacity
                          key={item.id}
                          style={[
                            styles.card,
                            {
                              borderColor: isSelected
                                ? 'rgba(40, 175, 110, 1)'
                                : 'rgba(255,255,255,0.3)',
                            },
                          ]}
                          onPress={() => {
                            setSelectedId(item.id);
                            setSelectedItem(item);
                          }}>
                          {/* Seçim göstergesi */}
                          <View
                            style={[
                              styles.selectionIndicator,
                              {
                                backgroundColor: isSelected
                                  ? 'rgba(40, 175, 110, 1)'
                                  : null,
                                borderColor: isSelected
                                  ? 'rgba(40, 175, 110, 1)'
                                  : null,
                              },
                            ]}>
                            {isSelected && (
                              <View style={styles.selectionIndicatorInside} />
                            )}
                          </View>

                          <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>
                              {item.description}
                            </Text>

                            {isSelected && item.save && (
                              <View
                                style={[
                                  styles.saveBadge,
                                  {backgroundColor: 'rgba(40, 175, 110, 1)'},
                                ]}>
                                <Text style={styles.saveText}>
                                  Save {item.save}
                                </Text>
                              </View>
                            )}
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                <View>
                  <View style={{marginLeft: 20, width: '93%'}}>
                    <MainButton
                      onPress={onPressSalesBuy}
                      text="Try free for 3 days"
                      textColor="rgba(255,255,255,1)"
                      color="rgba(40,175,110,1)"
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5,
                        flexDirection: 'column',
                      }}>
                      <Text style={styles.paywallText}>
                        After the 3-day free trial period you’ll be charged
                        ₺274.99 per year unless you cancel before the trial
                        expires. Yearly Subscription is Auto-Renewable
                      </Text>
                      <Text style={styles.paywallTextDown}>
                        Terms • Privacy • Restore
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  };

  if (next === 0) {
    return <OpenPageOne />;
  }

  if (next === 1) {
    return <OpenPageTwo />;
  }
  if (next === 2) {
    return <OpenPageThree />;
  }
  if (next === 3) {
    return <PaywallScreen />;
  }
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: 85,
    width: 300,

    marginTop: 59,
    flexDirection: 'column',
  },
  headerUp: {
    flexDirection: 'row',
    height: 33,
  },
  headerUpTextOne: {
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 33,
    color: 'rgba(19, 35, 27, 1)',
  },
  headerUpTextTwo: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 33,
    color: 'rgba(19, 35, 27, 1)',
  },
  headerDown: {
    height: 44,
  },
  headerDownText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: 'rgba(19, 35, 27, 0.7)',
  },
  main: {
    width: '100%',
    height: '68%',
  },
  main2: {
    width: '100%',
    height: '78%',
  },
  mainScreen2: {
    width: '100%',
    height: 450,
  },
  termAndPolicy: {
    flexDirection: 'column',
    width: 232,
    height: 30,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termAndPolicyDown: {
    flexDirection: 'row',
  },
  termAndPolicyDownTextOne: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    textDecorationLine: 'underline',
    color: 'rgba(89, 113, 101, 0.7)',
  },
  termAndPolicyDownText: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    color: 'rgba(89, 113, 101, 0.7)',
  },
  title: {
    height: 85,
    width: 310,
  },
  titleUp: {
    flexDirection: 'row',
  },
  titleUpTextOne: {
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 33,
    color: 'rgba(19, 35, 27, 1)',
  },
  titleUpTextTwo: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 33,
    color: 'rgba(19, 35, 27, 1)',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  linearGradient: {
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    marginTop: 82,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  containerOver: {
    width: '90%',
    height: '140%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  Imageheader: {
    flex: 1,
  },
  containerPaywall: {
    height: 100,
  },
  paywallHeader: {
    flexDirection: 'column',
    padding: 20,
  },
  paywallHeaderUp: {
    flexDirection: 'row',
  },
  paywallHeaderTextUp: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 46,
    color: 'rgba(255,255,255,1)',
  },
  paywallHeaderTextDown: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: 'rgba(255,255,255,1)',
    alignSelf: 'flex-end',
  },
  paywallHeaderText: {
    fontSize: 17,
    fontWeight: '300',
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)',
  },
  card: {
    marginLeft: 20,
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },

  selectionIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent', // Varsayılan boş
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionIndicatorInside: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'white', // Varsayılan boş
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255,255,255,1)',
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
    color: 'rgba(255,255,255,1)',
  },
  saveBadge: {
    position: 'absolute',
    top: -12,
    right: -15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  saveText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  paywallText: {
    fontSize: 9,
    fontWeight: '300',
    lineHeight: 11,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.52)',
    marginTop: 5,
  },
  paywallTextDown: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13,
    alignContent: 'center',
    color: 'rgba(255,255,255,0.5)',
  },
});
