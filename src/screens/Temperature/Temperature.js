import React, {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Styles from './TemperatureStyle';

const Temperature = () => {
  const [fromValue, setFromValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toValue, setToValue] = useState('');
  const [toUnit, setToUnit] = useState('Celsius');
  const [toDisplay, setToDisplay] = useState(false);

  const reset = () => {
    setFromUnit('Celsius');
    setFromValue('');
    setToUnit('Celsius');
    setToValue('');
    setToDisplay(false);
  };

  const convert = () => {
    let convertedValue = 0;
    switch (fromUnit) {
      case 'Celsius':
        convertedValue = fromValue;
        break;
      case 'Fahrenheit':
        convertedValue = (5 * (fromValue - 32)) / 9;
        break;
      case 'Kelvin':
        convertedValue = fromValue - 273;
        break;
      default:
        convertedValue = fromValue;
        break;
    }

    switch (toUnit) {
      case 'Celsius':
        convertedValue = convertedValue;
        break;
      case 'Fahrenheit':
        convertedValue = (9 / 5) * convertedValue + 32;
        break;
      case 'Kelvin':
        convertedValue = convertedValue + 273;
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
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
        <Text style={Styles.text}>To : </Text>
        <Picker
          style={Styles.picker}
          selectedValue={toUnit}
          onValueChange={unit => setToUnit(unit)}>
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Kelvin" value="Kelvin" />
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

export default Temperature;
