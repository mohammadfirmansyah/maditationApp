import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";
import useFetch from "../hook/useFetch";

const Home = () => {
  const router = useRouter();
  const { meditationData, BestMeditations, isLoading } = useFetch();

  // Handle logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userDetails");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Home",
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Text style={{ color: COLORS.primary, marginRight: 15 }}>
                Logout
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView style={{ padding: 20 }}>
        {/* Welcome Section */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 5 }}>
            Hello, Welcome! 🧘
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.gray }}>
            Find your perfect meditation
          </Text>
        </View>

        {/* Popular Meditations */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Popular Meditations
          </Text>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            meditationData.map((item) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: COLORS.white,
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text style={{ color: COLORS.gray, marginTop: 5 }}>
                  {item.description}
                </Text>
                <Text style={{ color: COLORS.primary, marginTop: 5 }}>
                  {item.duration} • {item.category}
                </Text>
              </View>
            ))
          )}
        </View>

        {/* Best Meditations */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Best Meditations
          </Text>
          {BestMeditations.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: COLORS.white,
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ color: COLORS.gray, marginTop: 5 }}>
                {item.description}
              </Text>
              <Text style={{ color: COLORS.primary, marginTop: 5 }}>
                {item.duration} • {item.category}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
