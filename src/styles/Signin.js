import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  input: {
    width: 250,
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
  button: {
    backgroundColor: Colors.blueSuperOnline,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    borderRadius: 20,
    padding: 10
  }
});