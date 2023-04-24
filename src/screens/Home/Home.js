import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Styles from './HomeStyle';

const Home = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Measurement');
  };
  return (
    <View style={Styles.body}>
      <Text style={Styles.text}>Welcome to Quantity Measurement</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#72efdd' : '#80ffdb',
          })}>
          <Text style={Styles.button}>Click To Start</Text>
        </Pressable>
    </View>
  );
};

export default Home;
