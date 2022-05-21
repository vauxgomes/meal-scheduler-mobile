import {
  ScrollView,
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  BG,
  BG_SECONDARY,
  FS_LG,
  FS_XL,
  PRIMARY,
  SPACING_LG,
  SPACING_MD,
} from "./src/styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("./assets/icons/bolt-circle.png")}
        />
        <Text style={styles.title}>Jandaya</Text>
      </View>

      <ScrollView style={styles.body}></ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("./assets/icons/qr-scan.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    position: "relative",
  },

  header: {
    padding: SPACING_LG,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BG,
  },

  title: {
    color: PRIMARY,
    fontSize: FS_LG,
    marginLeft: SPACING_MD,
  },

  body: {
    backgroundColor: "white",
    padding: SPACING_LG,
  },

  floatingButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: BG_SECONDARY,
    alignItems: "center",
    justifyContent: "center",
  },
});
