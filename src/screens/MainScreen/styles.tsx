import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  photo: {
    height: 150,
    width: 150,
    marginBottom: 40
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
  },
});