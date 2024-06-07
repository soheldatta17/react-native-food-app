import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';
import { color } from 'react-native-reanimated';
console.disableYellowBox = true;
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  A:{backgroundColor: '#DAC4FF'},
  headingContainer: {
    backgroundColor: '#DAC4FF',
    flexDirection: 'row', // Set flexDirection to 'row'
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center', // Center the content horizontally
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
    marginLeft: 10, // Add some margin between the icon and text
  },
  icon: {
    marginVertical: 8,
    
  },
  B:{color: '#DAC4FF'}

});

export default styles;
