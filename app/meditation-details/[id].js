import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { COLORS, SIZES, FONT } from "../../constants/theme";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const MeditationDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn detailPage={true} />,
          headerTitle: "Meditation Details",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          {/* Placeholder content */}
          <View style={styles.placeholderContainer}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>🧘</Text>
            </View>
            <Text style={styles.title}>Meditation Details</Text>
            <Text style={styles.subtitle}>
              Details for meditation ID: {id}
            </Text>
            <Text style={styles.description}>
              This page will display detailed information about the selected
              meditation session, including title, description, duration,
              category, and audio controls.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollContent: {
    paddingBottom: SIZES.xLarge,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.large,
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.large,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.large,
  },
  placeholderText: {
    fontSize: 80,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.small,
    textAlign: "center",
  },
  subtitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    marginBottom: SIZES.medium,
    textAlign: "center",
  },
  description: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 24,
  },
});
