import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Share,
  Alert,
  StyleSheet,
} from "react-native";
import {
  MeditationTopDisplay,
  About,
  Footer,
  Tabs,
} from "../../components";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

// Define available tabs for meditation details
const tabs = ["About", "Instructions"];

const MeditationDetails = () => {
  // Get meditation ID from route parameters
  const params = useGlobalSearchParams();
  const id = params.id;
  
  // Fetch meditation data using custom hook
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: id,
  });
  const meditationItem = useFetch().getItemById(parseInt(id, 10));
  
  // State management for active tab and refresh status
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  // Handle pull-to-refresh functionality
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  // Display content based on selected tab
  const displayTabContent = () => {
    if (activeTab === "About") {
      return (
        <About
          title={meditationItem.title}
          info={meditationItem.description ?? "No data provided"}
        />
      );
    } else if (activeTab === "Instructions") {
      return (
        <View style={styles.specificsContainer}>
          <Text style={styles.specificsTitle}>Instructions:</Text>
          <View style={styles.pointsContainer}>
            {(meditationItem.instructions ?? ["N/A"]).map((item, index) => (
              <View style={styles.pointWrapper} key={index}>
                <View style={styles.pointDot} />
                <Text style={styles.pointText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }
    return null;
  };

  // Share meditation details with others
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this meditation: ${meditationItem.title} (${meditationItem.duration})`,
      });
      if (result.action === Share.dismissedAction) {
        // Share dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header with share button */}
      <ScreenHeaderBtn detailPage={true} handleShare={onShare} />
      
      {/* Scrollable content with pull-to-refresh */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : !meditationItem || meditationItem.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            {/* Display meditation image, title, and info */}
            <MeditationTopDisplay
              meditationImage={meditationItem.image}
              meditationTitle={meditationItem.title}
              duration={meditationItem.duration}
              target={meditationItem.target}
            />
            
            {/* Tab navigation between About and Instructions */}
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            
            {/* Display content based on active tab */}
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      
      {/* Footer with favorite button */}
      <Footer data={meditationItem} />
    </SafeAreaView>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({
  specificsContainer: {
    padding: SIZES.medium,
  },
  specificsTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  pointsContainer: {
    marginTop: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.small / 2,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginRight: SIZES.small,
  },
  pointText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});
