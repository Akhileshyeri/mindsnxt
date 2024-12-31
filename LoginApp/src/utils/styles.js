import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7EAF6', // Soft lavender background
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6C63FF', // Bright purple color
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    width: '100%',
    padding: 2,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#6C63FF', // Bright purple button
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#6C63FF', // Bright purple link color
    textDecorationLine: 'underline',
    alignSelf: 'center',
    fontSize: 16,
  },
  errorText: {
    color: '#FF4D4D', // Bright red error color
    marginBottom: 15,
    fontSize: 14,
  },
});

