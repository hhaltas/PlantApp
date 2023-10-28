import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const PayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.buttonStyle}>
        <Image
          source={require('../../assets/images/BottomTabs/Scan.png')}
          style={{
            width: 75,
            height: 75,
            resizeMode: 'contain',
          }}
        />
      </Pressable>
      <View style={styles.container}>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Text>Hello from Overlay!</Text>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default PayScreen;
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
    height: 300,
  },
  buttonStyle: {
    height: 75,
    width: 75,
    borderRadius: 100,
    top: -25,
  },
});
