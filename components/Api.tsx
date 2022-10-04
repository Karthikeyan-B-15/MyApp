import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {useContactQuery} from '../apicall/ContactApi';
const Api: FunctionComponent = () => {
  const {data, isSuccess} = useContactQuery();
  return <View>{isSuccess && <Text>{data.page}</Text>}</View>;
};
export default Api;
