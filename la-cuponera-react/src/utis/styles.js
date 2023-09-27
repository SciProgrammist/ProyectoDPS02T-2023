import { StyleSheet } from 'react-native';
import colors from './colors';

export const styles = StyleSheet.create({

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  forgot: {
    fontSize: 14,
    color: '#2098F4',
    textAlign: 'center',
  },
  container: {
    paddingTop: 50,
    justifyContent: 'center',
  },
  form_input: {
    fontSize: 12,
  },
  viewForm: {
    width: '95%',
    paddingHorizontal: 0,
    borderRadius: 20,
    height: 150,
    justifyContent: 'center',
    margin: 'auto'
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 6,
    width: '80%',
    marginRight: 10,
    marginLeft: 50,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%',
  },
});
