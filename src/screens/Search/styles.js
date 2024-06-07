import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";
console.disableYellowBox = true;

const styles = StyleSheet.create({
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  screenContainer: {
    // flex: 1,
    backgroundColor:'pink'
  },
  flatList: {
    // flex: 1,
    marginLeft:20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10, // Adjust as needed
    paddingHorizontal: 16, // Adjust as needed
  },
  
  searchIcon: {
    tintColor: 'black',
    // marginTop: 40, // Removed this property
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 20,
    paddingHorizontal: 35, // Add padding to maintain center alignment
    textAlign: "left", // Align entered text and cursor to the left
  },
  
});

export default styles;
