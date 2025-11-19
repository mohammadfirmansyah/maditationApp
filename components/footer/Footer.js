import { View, Text, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Footer.style";
import { icons } from "../../constants";

const Footer = ({ data }) => {
  // State to track if the item is marked as favorite
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the current item is in the favorites list
  const checkIfFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      const favoritesArray = favorites ? JSON.parse(favorites) : [];
      const isFav = favoritesArray.some((item) => item.id === data.id);
      setIsFavorite(isFav);
    } catch (error) {
      console.error("Failed to fetch favorites", error);
    }
  };

  // Load favorites when component mounts
  useEffect(() => {
    checkIfFavorite();
  }, []);

  // Toggle favorite status: add or remove from favorites
  const handleFavoriteToggle = async () => {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      favorites = favorites ? JSON.parse(favorites) : [];
      
      // Remove from favorites if already favorited, otherwise add it
      const updatedFavorites = isFavorite
        ? favorites.filter((item) => item.id !== data.id)
        : [...favorites, data];
      
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Failed to update favorites", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Heart icon button to toggle favorite */}
      <TouchableOpacity style={styles.likeBtn} onPress={handleFavoriteToggle}>
        <Image
          source={isFavorite ? icons.heartFilled : icons.heartOutline}
          resizeMode="contain"
          style={[
            styles.likeBtnImage,
            { tintColor: isFavorite ? "red" : "#F37453" },
          ]}
        />
      </TouchableOpacity>

      {/* Action button with text indicating current favorite status */}
      <TouchableOpacity style={styles.applyBtn} onPress={handleFavoriteToggle}>
        <Text style={styles.applyBtnText}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
