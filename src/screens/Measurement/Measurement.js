import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Styles from './MeasurementStyle';

const Measurement = ({navigation}) => {
  const onPressHandler1 = () => {
    navigation.navigate('Length');
  };

  const onPressHandler2 = () => {
    navigation.navigate('Temperature');
  };

  return (
    <View style={Styles.body}>
      <Text style={Styles.text}>What You Want To Measurement?</Text>
      <View>
        <Text style={Styles.subText}>Length</Text>
        <Pressable
          onPress={onPressHandler1}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#72efdd' : '#80ffdb',
          })}>
          <Text style={Styles.button}> Click Here to Measure Length</Text>
        </Pressable>
        <Text style={Styles.subText}>Temperature</Text>
        <Pressable
          onPress={onPressHandler2}
          style={({pressed}) => ({
            backgroundColor: pressed ? '#72efdd' : '#80ffdb',
          })}>
          <Text style={Styles.button}>Click Here to Measure Temperature</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Measurement;
