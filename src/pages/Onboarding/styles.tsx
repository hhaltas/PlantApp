import {StyleSheet} from 'react-native';
import {TextColor} from '../../assets/color/colors';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  headerSize: {
    width: 300,
    height: 85,
    marginTop: 78,
    marginLeft: 24,
  },
  headerSizeOne: {
    width: 305,
    height: 66,
    marginTop: 78,
    marginLeft: 24,
  },
  textHeaderUp: {
    flexDirection: 'row',
  },
  textHeaderUpOne: {
    flexDirection: 'column',
  },
  textHeader: {
    fontSize: 28,
    fontWeight: '300',
    color: TextColor,
    lineHeight: 33,
    marginBottom: 8,
  },
  textHeaderDetail: {
    fontSize: 16,
    fontWeight: '400',
    color: TextColor,
    opacity: 0.7,
  },
  imageStyle: {
    width: '100%',
    height: 499,
    resizeMode: 'contain',
  },
  imageContentStyle: {
    width: '100%',
    height: 520,
    resizeMode: 'contain',
  },
  imageSliderStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  imageRectangeStyle: {
    width: 140,
    height: 20,
    position: 'absolute',
    resizeMode: 'contain',
    top: 108,
    right: 45,
  },
  imageRectangeStyleTwo: {
    width: 154,
    height: 30,
    position: 'absolute',
    resizeMode: 'contain',
    top: 105,
    right: 85,
  },
  imageObjectStyle: {
    width: '100%',
    height: 530,
    position: 'absolute',
    top: 120,
  },
  imagePhoneStyle: {
    width: '100%',
    height: 520,
    resizeMode: 'cover',
    marginTop: 60,
    opacity: 0.9,
  },
  imageArtworkStyle: {
    marginTop: 90,
    right: -5,
    width: 400,
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
  },
});
