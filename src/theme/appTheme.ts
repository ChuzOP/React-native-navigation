import {StyleSheet} from 'react-native';

export const colors = {
  pirmary: '#4B56D2',
  secondary: '#D09CFA',
  alert: '#E0144C',
  succes: '#54B435',
  fiumba: '#000000',
};

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
  avatarContainer: {
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingTop: 15,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  navContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  nav: {marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', width: 100},
  navText: {
    color: 'black',
    fontSize: 20,
  },
});
