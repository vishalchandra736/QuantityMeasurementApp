import React, {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Styles from './LengthStyle';

const Length = () => {
  const [fromValue, setFromValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Millimeter');
  const [toValue, setToValue] = useState('');
  const [toUnit, setToUnit] = useState('Millimeter');
  const [toDisplay, setToDisplay] = useState(false);

  const reset = () => {
    setFromUnit('Millimeter');
    setFromValue('');
    setToUnit('Millimeter');
    setToValue('');
    setToDisplay(false);
  };

  const convert = () => {
    let convertedValue = 0;
    switch (fromUnit) {
      case 'Millimeter':
        convertedValue = fromValue / 1000;
        break;
      case 'Centimeter':
        convertedValue = fromValue / 100;
        break;
      case 'Meter':
        convertedValue = fromValue;
        break;
      case 'Kilometer':
        convertedValue = fromValue * 1000;
        break;
      default:
        convertedValue = fromValue;
        break;
    }

    switch (toUnit) {
      case 'Millimeter':
        convertedValue = convertedValue * 1000;
        break;
      case 'Centimeter':
        convertedValue = convertedValue * 100;
        break;
      case 'Meter':
        convertedValue = convertedValue;
        break;
      case 'Kilometer':
        convertedValue = convertedValue / 1000;
        break;
      default:
        convertedValue = convertedValue;
        break;
    }
    setToValue(convertedValue);
    setToDisplay(true);
  };

  return (
    <View style={Styles.body}>
      <View>
        {toDisplay && (
          <Text style={Styles.displayText}>
            {fromValue} {fromUnit} = {toValue} {toUnit}
          </Text>
        )}
      </View>
      <View>
        <TextInput
          style={Styles.inputText}
          placeholder="enter the number"
          onChangeText={val => setFromValue(val)}
          value={fromValue}
          keyboardType="numeric"
        />
        <Text style={Styles.text}>From : </Text>
        <Picker
          style={Styles.picker}
          selectedValue={fromUnit}
          onValueChange={unit => setFromUnit(unit)}>
          <Picker.Item label="Millimeter" value="Millimeter" />
          <Picker.Item label="Centimeter" value="Centimeter" />
          <Picker.Item label="Meter" value="Meter" />
          <Picker.Item label="Kilometer" value="Kilometer" />
        </Picker>
        <Text style={Styles.text}>To : </Text>
        <Picker
          style={Styles.picker}
          selectedValue={toUnit}
          onValueChange={unit => setToUnit(unit)}>
          <Picker.Item label="Millimeter" value="Millimeter" />
          <Picker.Item label="Centimeter" value="Centimeter" />
          <Picker.Item label="Meter" value="Meter" />
          <Picker.Item label="Kilometer" value="Kilometer" />
        </Picker>
        <Pressable
          onPress={convert}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#0496ff' : '#006ba6',
            },
            Styles.button,
          ]}>
          <Text style={Styles.buttonText}>Convert</Text>
        </Pressable>
        <Pressable
          onPress={reset}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#c1121f' : '#780000',
            },
            Styles.button,
          ]}>
          <Text style={Styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Length;
