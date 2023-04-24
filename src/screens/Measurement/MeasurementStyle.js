import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '##d9d9d9',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: -200,
    padding: 30,
    fontWeight: 'bold',
    margin: 10,
    color: '#081c15',
    fontStyle: 'italic',
    
  },
  subText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    padding: 30,
    fontWeight: 500,
  },
  button: {
    fontSize: 20,
    padding: 10,
    fontStyle: 'italic',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Styles;
