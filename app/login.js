import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Router for navigation
  const router = useRouter();

  // Handle login logic
  const handleLogin = async () => {
    // Validate all fields are filled
    if (!email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    // Create user details object for comparison
    const userDetails = { email, password, token: "sample-token" };
    console.log("userDetails", userDetails);

    try {
      // Retrieve stored user details from AsyncStorage
      const detailsDatafromSignup = await AsyncStorage.getItem("userDetails");
      
      if (detailsDatafromSignup) {
        // Parse stored details and compare credentials
        const parsedDetails = JSON.parse(detailsDatafromSignup);
        
        if (
          userDetails.email === parsedDetails.email &&
          userDetails.password === parsedDetails.password
        ) {
          // Credentials match - navigate to home
          router.push("/home");
        } else {
          // Incorrect credentials
          Alert.alert("Error", "Incorrect email or password.");
          alert("Error: Incorrect email or password.");
        }
      } else {
        // No user details found
        Alert.alert("Error", "No user details found in AsyncStorage.");
        alert("Error: No user details found in AsyncStorage.");
      }
    } catch (error) {
      // Handle AsyncStorage errors
      console.error("Error accessing AsyncStorage", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* Configure header style */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <></>,
          headerTitle: "",
        }}
      />

      {/* Main container */}
      <View style={{ padding: 20 }}>
        {/* Logo/Icon container */}
        <View
          style={{
            padding: 20,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f0f0f0",
            borderRadius: 50,
            height: 90,
            ...SHADOWS.medium,
            shadowColor: COLORS.white,
          }}
        >
          <Image
            source={icons.menu}
            style={{
              width: 50,
              height: 50,
              marginBottom: 20,
            }}
          />
        </View>

        {/* Form Component */}
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            {/* Email input */}
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,
              }}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />

            {/* Password input */}
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,
              }}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder="Password"
            />
          </View>

          {/* Login button */}
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
            }}
            onPress={handleLogin}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Options - Sign Up link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "blue" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
