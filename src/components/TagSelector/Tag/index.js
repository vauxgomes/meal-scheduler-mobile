import { useState } from "react";
import { TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";

import {
  FONT_FAMILY,
  FS_MD,
  FS_SM,
  PRIMARY,
  SHADOW_SM,
  SPACING_LG,
  SPACING_SM,
  WHITE,
} from "../../../styles/styles";

export default function Tag({ name, active = false, onPress }) {
  return (
    <TouchableOpacity
      style={active ? [styles.container, styles.active] : styles.container}
      onPress={onPress}
    >
      <Text style={active ? [styles.text, styles.active] : styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    paddingVertical: SPACING_SM,
    paddingHorizontal: SPACING_LG,
    backgroundColor: WHITE,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    ...SHADOW_SM,
  },

  active: {
    backgroundColor: PRIMARY,
    color: WHITE,
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FS_SM,
    color: PRIMARY,
    fontWeight: "600",
  },
});
