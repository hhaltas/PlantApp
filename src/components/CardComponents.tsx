import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// 📌 Card Bileşeni
interface CardProps {
  image: string;
  title: string;
  description: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
}

const CardComponent: React.FC<CardProps> = ({
  image,
  title,
  description,
  width,
  height,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity style={[styles.card, {width, height, backgroundColor}]}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, {color: textColor ? textColor : 'white'}]}>
        {title}
      </Text>
      <Text
        style={[styles.description, {color: textColor ? textColor : 'white'}]}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5, // Android gölge efekti
    flexDirection: 'column',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    paddingLeft: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    paddingLeft: 10,
  },
});
