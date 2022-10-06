import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useContactQuery} from '../apicall/ContactApi';
const Item = ({props}: any) => (
  <View style={styles.view}>
    <Image style={styles.img} source={{uri: props.avatar}} />
    <View style={styles.child}>
      <View style={styles.name}>
        <Text style={styles.text}>{props.first_name}</Text>
        <Text style={styles.text}>{props.last_name}</Text>
      </View>
      <Text style={styles.text}>{props.email}</Text>
    </View>
  </View>
);
const Api: FunctionComponent = () => {
  const {data, isSuccess} = useContactQuery();
  const renderItem = ({item}: any) => <Item props={item} />;
  return (
    <View>
      {isSuccess && (
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  child: {
    paddingHorizontal: 10,
  },
});
export default Api;
