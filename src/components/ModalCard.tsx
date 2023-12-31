import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  AlertDangerColor,
  AlertInfoColor,
  AlertSuccessColor,
  AlertWarningColor,
  ButtonColorNO,
  ButtonColorOK,
  textColorTitle,
  GeneralButtonColor,
} from '../assets/color/colors';
import ButtonUtil from './ButtonUtil';
const ModalAlert = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.main}>
        <View
          style={[
            styles.headerView,
            {
              backgroundColor:
                props.title === 0
                  ? AlertDangerColor
                  : props.title === 1
                  ? AlertDangerColor
                  : props.title === 2
                  ? AlertWarningColor
                  : AlertSuccessColor,
            },
          ]}>
          <View style={{width: '20%', padding: 10}}>
            <Image
              source={
                props.title === 0
                  ? require('../assets/images/alert/warning.png')
                  : props.title === 1
                  ? require('../assets/images/alert/info.png')
                  : props.title === 2
                  ? require('../assets/images/alert/info.png')
                  : require('../assets/images/alert/checked.png')
              }
              style={[
                {
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  tintcolor: 'red',
                },
              ]}
            />
          </View>
          <Text
            style={[
              styles.headerTitle,
              {
                color: props.title === 0 ? 'white' : textColorTitle,
                width: '80%',
              },
            ]}>
            {props.title === 0
              ? 'Error'
              : props.title === 1
              ? 'Attention'
              : props.title === 2
              ? 'Attention'
              : 'Success'}
          </Text>
        </View>

        <View style={styles.centerView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.centerText}>{props.description}</Text>
          </View>
        </View>
        <View
          style={{
            height: 35,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          {props.isClosed && props.title != 3 && (
            <ButtonUtil
              title={'Kapat'}
              OKNO={false}
              onPress={props.closedModal}
              color={ButtonColorNO}
            />
          )}
          {props.isOK && (
            <ButtonUtil
              title={'Tamam'}
              OKNO={true}
              onPress={props.changedNavigation}
              color={GeneralButtonColor}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 250,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  centerView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
