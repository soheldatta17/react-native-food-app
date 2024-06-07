// Import necessary modules
import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
console.disableYellowBox = true;

// DrawerContainer component
export default function DrawerContainer(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlavorFiesta</Text>
      </View>
      <View style={styles.menuSection}>
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        {/* Add space between sections */}
        <View style={styles.sectionSeparator} />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        {/* Add space between sections */}
        <View style={styles.sectionSeparator} />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }),
};
