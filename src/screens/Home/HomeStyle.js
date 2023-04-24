import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: 'bold',
    margin: 20,
    color: '#081c15',
    lineHeight: 50,
  },
  button: {
    fontSize: 30,
    padding: 20,
    fontStyle: 'italic',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    color: '#000000',
  },
});

export default Styles;
