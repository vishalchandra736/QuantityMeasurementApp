import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
  },
  displayText: {
    color: '#bb3e03',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#01161e',
    borderRadius: 10,
    fontSize: 20,
    color: '#000000',
    width: 300,
    height: 60,
    margin: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    color: '#2f3e46',
    margin: 20,
    paddingTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    margin: 5,
    width: 300,
    borderWidth: 10,
    backgroundColor: '#00000030',
    marginBottom: 10,
    color: '#000000',
  },
  button: {
    margin: 20,
    padding: 10,
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 50,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Styles;
