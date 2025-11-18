import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { COLORS } from "../constants";

// Main entry point that checks login state
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check if user is logged in on component mount
  useEffect(() => {
    checkLoginState();
  }, []);

  // Function to check if user details exist in AsyncStorage
  const checkLoginState = async () => {
    try {
      const userDetails = await AsyncStorage.getItem("userDetails");
      if (userDetails) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error checking login state:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect based on login state once loading is complete
  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }
  }, [isLoading, isLoggedIn]);

  // Display loading indicator while checking login state
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return null;
}
