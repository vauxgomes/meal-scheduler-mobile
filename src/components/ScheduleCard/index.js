// Inspiration
// https://dribbble.com/shots/18313112-Onboarding-panel/attachments/13522156?mode=media

import { FlatList, Text, View, StyleSheet } from "react-native";
import Meal from "../Meal";

import {
  BLACK,
  FS_MD,
  FS_SM,
  GRAY,
  SHADOW_SM,
  SPACING_LG,
  SPACING_MD,
  SPACING_SM,
  WHITE,
} from "../../styles/styles";

export default function ScheduleCard({ schedule }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {new Date(schedule.date).toLocaleString("pt-BR", { weekday: "long" })}
      </Text>
      <Text style={styles.subtitle}>
        {new Date(schedule.date).toLocaleDateString("pt-BR")}
      </Text>

      <FlatList
        data={schedule.meals}
        renderItem={({ item }) => <Meal meal={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING_LG,
    marginHorizontal: SPACING_MD,
    marginTop: SPACING_MD,
    borderRadius: 10,
    backgroundColor: WHITE,
    ...SHADOW_SM,
  },

  title: {
    color: BLACK,
    fontWeight: "500",
    fontSize: FS_MD,
    textTransform: "capitalize",
    marginBottom: SPACING_SM,
  },

  subtitle: {
    color: GRAY,
    fontSize: FS_SM,
    marginBottom: SPACING_MD,
  },
});
