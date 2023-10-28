import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Rubik} from '../assets/font/fontfamily';

const InputText = props => {
  const [data, setData] = useState(null);
  const [hidePassword, sethidePassword] = useState(true);
  return (
    <View
      style={[
        styles.containerT,
        {flexDirection: props.design, alignItems: 'center'},
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}>
        {props.iconVisible && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={props.managePasswordVisibility}>
            <Image
              source={require('../assets/images/search.png')}
              style={styles.btnImage}
            />
          </TouchableOpacity>
        )}
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          style={styles.inputLine}
          value={props.value}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          onChangeText={props.handleChange}
          inputMode={props.inputMode}
        />
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  containerT: {
    marginTop: 20,
    width: 327,
    height: 44,
    borderRadius: 12,
    marginBottom: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  header: {
    flex: 1,
    padding: 5,
  },

  header1: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    borderRadius: 1,
    elevation: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  visibilityBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: '13%',
    alignSelf: 'flex-end',
  },
  btnImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputLine: {
    height: 'auto',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'left',
    marginHorizontal: 5,
    flex: 1,
    fontFamily: Rubik,
  },
});
