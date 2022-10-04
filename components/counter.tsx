import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Root} from '../App';
import {decrement, increment} from '../redux/Slice';
import {RootState} from '../redux/Store';
type Props = NativeStackScreenProps<Root, 'Counter'>;
const Counter: FunctionComponent<Props> = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const val = useSelector((state: RootState) => state.counter);
  return (
    <View style={styles.view}>
      <View style={styles.child}>
        <Pressable style={styles.btn} onPress={() => dispatch(increment())}>
          <Text style={styles.btntxt}>+</Text>
        </Pressable>
        <Text style={styles.text}>{val.value}</Text>
        <Pressable style={styles.btn} onPress={() => dispatch(decrement())}>
          <Text style={styles.btntxt}>-</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.apibtn}
        onPress={() => navigation.navigate('Api')}>
        <Text style={styles.apibtntxt}>Api call</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#a0a1e8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btntxt: {
    color: '#fff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 50,
  },
  apibtn: {
    width: 100,
    height: 40,
    backgroundColor: '#a0a1e8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  apibtntxt: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Counter;
