import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONT } from "../constants/theme";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Settings = () => {
  const router = useRouter();

  // Handle logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userDetails");
      console.log("User logged out successfully");
      router.replace("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn detailPage={true} />,
          headerTitle: "Settings",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          {/* Settings Header */}
          <View style={styles.headerSection}>
            <Text style={styles.headerTitle}>Account Settings</Text>
            <Text style={styles.headerSubtitle}>
              Manage your account and preferences
            </Text>
          </View>

          {/* Settings Options */}
          <View style={styles.settingsSection}>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingLabel}>Profile</Text>
              <Text style={styles.settingValue}>View and edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingLabel}>Notifications</Text>
              <Text style={styles.settingValue}>Manage notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingLabel}>Privacy</Text>
              <Text style={styles.settingValue}>Privacy settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingLabel}>About</Text>
              <Text style={styles.settingValue}>App information</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

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
    paddingTop: SIZES.medium,
  },
  headerSection: {
    marginBottom: SIZES.large,
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.xSmall,
  },
  headerSubtitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  settingsSection: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    marginBottom: SIZES.large,
  },
  settingItem: {
    paddingVertical: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  settingLabel: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.xSmall,
  },
  settingValue: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.medium,
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.medium,
  },
  logoutText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
});
