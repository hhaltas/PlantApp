import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PaywallData} from '../config/config';
import {Rubik} from '../assets/font/fontfamily';

interface IList {
  id: string;
  name: string;
  icon: string;
  detail: string;
}

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
  disabled?: boolean;
}
const windowDimensions = Dimensions.get('window');

const HorizontalList = (props: IList) => {
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
    icon,
    disabled,
  } = props;
  const renderItem = data => (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.itemView,
        width,
        height,
        backgroundColor,
        flex: 1,
      }}>
      {console.log('data', data)}
      <Image
        source={data.item.icon}
        style={{width: 35, height: 35, resizeMode: 'contain'}}
      />

      <Text
        style={{
          ...styles.textHeader,
          fontSize,
          fontWeight,
          color,
          fontFamily: Rubik,
        }}>
        {data?.item?.name}
      </Text>
      <Text style={styles.textDetail}>{data?.item?.detail}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.main}>
      <FlatList
        data={PaywallData}
        renderItem={renderItem}
        keyExtractor={(item: IList) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
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
    width: '95%',
    height: 'auto',
    marginBottom: 20,
  },
  itemView: {
    borderRadius: 14,
    margin: 5,
    padding: 15,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 5,
  },
  textDetail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '400',
    marginTop: 5,
  },
});
