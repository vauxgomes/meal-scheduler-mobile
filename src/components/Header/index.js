import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  BG,
  BG_SECONDARY,
  FS_LG,
  SPACING_LG,
  SPACING_MD,
  SPACING_SM,
  WHITE,
} from "../../styles/styles";

export default function Header({ navigation, hideQRButton = false }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate("home")}
      >
        <Image
          style={{ width: 35, height: 35 }}
          source={require("../../../assets/icons/food.png")}
        />
        <Text style={styles.title}>Jandaya</Text>
      </TouchableOpacity>

      {!hideQRButton && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("scanner")}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../../assets/icons/qr-scan.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SPACING_MD,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: BG,
  },

  logo: {
    padding: SPACING_SM,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: WHITE,
    fontSize: FS_LG,
    marginLeft: SPACING_MD,
    // fontFamily: "Poppins-Regular",
  },

  btn: {
    padding: SPACING_SM,
    backgroundColor: BG_SECONDARY,
    alignItems: "center",
    justifyContent: "center",
  },
});
