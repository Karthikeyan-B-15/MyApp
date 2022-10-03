import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
const Login = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome User</Text>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <Pressable style={styles.loginbtn} android_ripple={{color: '#fff'}}>
        <Text style={styles.logintxt}>Login</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#a0a1e8',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Lobster',
  },
  view: {
    backgroundColor: '#eef1ff',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '75%',
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#e1e1fa',
  },
  loginbtn: {
    backgroundColor: '#a0a1e8',
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logintxt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
export default Login;
