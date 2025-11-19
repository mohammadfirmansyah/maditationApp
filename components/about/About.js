import { View, Text } from "react-native";
import styles from "./About.style";

const About = ({ info, title }) => {
  return (
    <View style={styles.container}>
      {/* Section heading displaying the title */}
      <Text style={styles.headText}>About {title}:</Text>
      
      {/* Content box containing detailed information */}
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
