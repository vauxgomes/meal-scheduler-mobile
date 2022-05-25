import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";

import Header from "../../components/Header";
import ScheduleCard from "../../components/ScheduleCard";

import api from "../../services/api";
import { BG, BG_SECONDARY, SPACING_LG } from "../../styles/styles";

export default function Main({ navigation, route }) {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    api.setToken(route.params.token);
    api.getWeek().then((response) => {
      let date = null;
      const schedules = [];

      response.forEach((schedule) => {
        if (schedule.date === date) {
          schedules[schedules.length - 1].meals.push(schedule);
        } else {
          date = schedule.date;

          schedules.push({
            id: schedules.length,
            date: schedule.date,
            meals: [schedule],
          });
        }
      });

      setSchedules(schedules);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <FlatList
        style={styles.body}
        data={schedules}
        renderItem={({ item }) => <ScheduleCard schedule={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    position: "relative",
  },

  body: {
    paddingBottom: SPACING_LG,
    backgroundColor: BG_SECONDARY,
  },
});
