import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PaywallData} from '../config/config';
import LinearGradient from 'react-native-linear-gradient';
import {Rubik} from '../assets/font/fontfamily';

interface IList {
  id: string;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  detail: string;
  onPress: () => void;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  disabled: string;
  data: [];
}
const windowDimensions = Dimensions.get('window');

const HorizontalList = (props: IList) => {
  const {
    title,
    onPress,
    color,
    width,
    height,
    fontSize,
    fontWeight,
    disabled,
    data,
    horizontal,
  } = props;
  const renderItem = item => (
    <LinearGradient
      colors={['#F8FAFF', '#FAFAFA']}
      style={{
        width,
        height,
        borderRadius: 14,
        marginRight: 10,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        disabled={props.disabled}
        style={{
          ...styles.itemView,
        }}>
        <ImageBackground
          source={{
            uri: horizontal ? item.item?.image_uri : item.item?.image?.url,
          }}
          imageStyle={{borderRadius: 12, resizeMode: 'contain'}}
          style={{
            ...styles.BackgroundImage,
            width,
            height,
          }}>
          <Text
            style={[
              {
                ...styles.textHeaderHorizontal,
                fontSize,
                fontWeight,
                color: item.item?.image_uri ? color : 'black',
                top: horizontal ? 110 : 0,
                marginTop: horizontal ? 0 : 20,
                width: horizontal ? '90%' : '70%',
                fontFamily: Rubik,
              },
            ]}>
            {item.item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </LinearGradient>
  );
  return (
    <View style={[{...styles.main}, {height: horizontal ? 165 : 300}]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: IList) => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={horizontal == true ? 1 : 2}
        snapToInterval={Dimensions.get('window').width / 5}
        getitemlayout={(data, index) =>
          // max 5 items visibles at once
          ({
            length: Dimensions.get('window').width / 5,
            offset: (Dimensions.get('window').width / 5) * index,
            index,
          })
        }
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main: {
    marginTop: 20,
  },
  itemView: {},
  textHeader: {
    marginTop: 5,
    width: '90%',
    height: 'auto',
    margin: 11,
    flexWrap: 'wrap',
  },
  textHeaderHorizontal: {
    marginTop: 5,
    height: 'auto',
    top: 100,
    margin: 11,
    flexWrap: 'wrap',
  },

  textDetail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '400',
    marginTop: 5,
  },
  BackgroundImage: {
    resizeMode: 'contain',
    marginRight: 15,
    borderRadius: 12,
  },
});

/*
  <Image
        source={{uri: data?.item.image_uri}}
        style={{width: 35, height: 35, resizeMode: 'contain'}}
      />


*/
