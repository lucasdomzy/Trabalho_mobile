import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
    marginBottom: 5,
  },
  profileImage: {
    width: 220, 
    height: 220, 
    borderRadius: 110,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 15, 
    position: 'absolute',
    top: 50, 
  },
});

export default styles;