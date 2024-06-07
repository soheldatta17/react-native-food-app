// Updated styles
import { StyleSheet } from 'react-native';
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Set your desired border color
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuSection: {
    marginTop: 20,
  },
  sectionSeparator: {
    height: 20, // Set the desired space between sections
  },
});

export default styles;
