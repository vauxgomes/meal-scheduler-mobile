import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import Tag from "./Tag";

import { SPACING_MD } from "../../styles/styles";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function TagSelector({ tags }) {
  const [selectedId, setSelectedId] = useState(null);
  const tagItems = tags.map((t, k) => ({ title: t, id: k }));

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Tag
        name={item.title}
        active={item.id === selectedId}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tagItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: SPACING_MD,
    paddingHorizontal: SPACING_MD,
  },
});
