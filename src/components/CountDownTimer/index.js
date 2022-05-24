import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FS_XXXL, SPACING_LG, WHITE } from "../../styles/styles";

export default function CountDownTimer({ timeInSeconds, onEndingTime }) {
  const [time, setTime] = useState(timeInSeconds);

  useEffect(() => {
    if (time > 0) {
      const interval = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(interval);
    } else {
      onEndingTime();
    }
  }, [time]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${time}`.padStart(2, "0")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: WHITE,
    borderWidth: 8,
    padding: SPACING_LG,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: WHITE,
    fontWeight: "bold",
    fontSize: FS_XXXL,
    textAlign: "center",
  },
});
