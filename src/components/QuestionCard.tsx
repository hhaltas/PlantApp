import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';

// 📌 Card Bileşeni
interface QuestionCardProps {
  image: string;
  title: string;
  description: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  source?: string;
  borderColor?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  image,
  title,
  description,
  width,
  height,
  backgroundColor,
  textColor,
  source,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          width,
          height,
          backgroundColor,
          borderWidth: borderColor ? 0.5 : 1,
          borderColor: 'rgba(41, 187, 137, 0.18)',
        },
      ]}>
      <ImageBackground
        source={{uri: source}}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover">
        <View
          style={{
            marginTop: textColor ? 10 : 110,
            width: textColor ? 110 : '100%',
          }}>
          <Text
            style={{
              color: textColor ? textColor : 'white',
              fontSize: textColor ? 16 : 15,
              fontWeight: textColor ? '500' : '400',
              lineHeight: 20,
              marginLeft: 15,
            }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    marginLeft: 15,
    marginBottom: 15,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {},
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    paddingLeft: 10,
  },
});
