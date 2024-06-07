import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';
console.disableYellowBox = true;
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
