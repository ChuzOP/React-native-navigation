import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    margin: 15,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  buttonP: {
    width: 100,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#4B56D2',
    justifyContent: 'center',
  },
  buttonM: {
    width: 100,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#FB2576',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
});
