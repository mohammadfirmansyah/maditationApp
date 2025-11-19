import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user details from AsyncStorage
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const storedDetails = await AsyncStorage.getItem("userDetails");
      if (storedDetails) {
        const parsedDetails = JSON.parse(storedDetails);
        console.log("User details loaded:", parsedDetails);
        setUserDetails(parsedDetails);
      } else {
        console.log("No user details found in AsyncStorage");
        // Set default user details if none exist
        setUserDetails({ userName: "Guest" });
      }
    } catch (error) {
      console.error("Error loading user details:", error);
      // Set default user details on error
      setUserDetails({ userName: "Guest" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn detailPage={false} />,
          headerTitle: "",
        }}
      />

      {/* Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.screensDisplay} testID="screensDisplay">
          {/* Welcome section with user greeting */}
          <Welcome userDetails={userDetails} />

          {/* Popular meditation section */}
          <View style={styles.sectionContainer}>
            <PopularMeditation />
          </View>

          {/* Daily meditation recommendations */}
          <View style={styles.sectionContainer}>
            <DailyMeditation />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  loadingText: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  scrollContent: {
    paddingBottom: SIZES.xLarge,
  },
  screensDisplay: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
  },
  sectionContainer: {
    marginTop: SIZES.large,
  },
});
