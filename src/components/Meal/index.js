import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  BLACK,
  FS_MD,
  FS_SM,
  GRAY,
  GRAY_LINE,
  SPACING_SM,
} from "../../styles/styles";

export default function Meal({ meal }) {
  const [like, setLike] = useState(!!meal.like);

  let checkIcon = require("../../../assets/icons/bolt-circle-gray.png");
  let favIconGray = require("../../../assets/icons/favorite-gray.png");
  let favIconActive = require("../../../assets/icons/favorite-active.png");

  if (meal.order_id)
    checkIcon = require("../../../assets/icons/bolt-circle-black.png");

  return (
    <View style={[styles.flexRow, styles.container]}>
      <View style={styles.flexRow}>
        <Image style={{ width: 24, height: 24 }} source={checkIcon} />
        <Text style={styles.title}>{meal.description}</Text>
      </View>

      <TouchableOpacity style={styles.likeBtn} onPress={() => setLike(!like)}>
        <Image
          style={{ width: 24, height: 24 }}
          source={like ? favIconActive : favIconGray}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    justifyContent: "space-between",

    borderBottomColor: GRAY_LINE,
    borderBottomWidth: 1,
  },

  title: {
    color: BLACK,
    fontSize: FS_MD,
    marginStart: SPACING_SM,
  },

  likeBtn: {
    width: 60,
    height: 60,
    paddingRight: SPACING_SM,
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "red",
  },
});
