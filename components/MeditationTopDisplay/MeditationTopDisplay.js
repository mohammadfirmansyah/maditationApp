import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./MeditationTopDisplay.style";

const MeditationTopDisplay = ({ meditationImage, meditationTitle, duration, target }) => {
  return (
    <View style={styles.container}>
      {/* Meditation image display */}
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: meditationImage,
          }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </View>

      {/* Meditation title */}
      <View style={styles.meditationTitleBox}>
        <Text style={styles.meditationTitle}>{meditationTitle}</Text>
      </View>

      {/* Meditation info: target and duration */}
      <View style={styles.meditationInfoBox}>
        <Text style={styles.meditationName}>{target} / </Text>
        <View style={styles.durationBox}>
          <Image
            source={"https://cdn-icons-png.flaticon.com/512/109/109613.png"}
            resizeMode="cover"
            style={styles.durationImage}
          />
          <Text style={styles.durationName}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

export default MeditationTopDisplay;
