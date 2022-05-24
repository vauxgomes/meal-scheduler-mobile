import {
  ScrollView,
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import ScheduleCard from "./src/components/ScheduleCard";

import {
  BG,
  BG_SECONDARY,
  FS_LG,
  PRIMARY,
  SPACING_LG,
  SPACING_MD,
  SPACING_SM,
  WHITE,
} from "./src/styles/styles";

const DATA = [
  {
    id: 1,
    date: "2022-05-24",
    meals: [
      {
        id: "34042422-2aa5-4d9b-8f7a-79a3d8551072",
        meal_id: "11d4c090-3f60-4c9c-aa75-81c9389d0a74",
        description: "Description meal 1",
        time: 10,
        date: "2022-05-23",
        created_at: "2022-05-22 17:21:16",
        updated_at: "2022-05-22 17:21:16",
        order_id: "fcadf0a6-dfb0-4027-bf27-51c7faac56b1",
        like: 1,
      },
      {
        id: "62df6590-d22f-4343-9af1-91a1bd065187",
        meal_id: "11d4c090-3f60-4c9c-aa75-81c9389d0a74",
        description: "Description meal 1",
        time: 11,
        date: "2022-05-23",
        created_at: "2022-05-22 17:21:16",
        updated_at: "2022-05-22 17:21:16",
        order_id: null,
        like: null,
      },
    ],
  },

  {
    id: 2,
    date: "2022-05-25",
    meals: [
      {
        id: "a2b7a3a0-fb3e-4256-8572-e110a1fb56e1",
        meal_id: "930f96e2-7d44-4e1a-9098-e382a23e735a",
        description: "Description meal 2",
        time: 11,
        date: "2022-05-24",
        created_at: "2022-05-22 17:21:21",
        updated_at: "2022-05-22 17:21:21",
        order_id: null,
        like: null,
      },
    ],
  },

  {
    id: 3,
    date: "2022-05-26",
    meals: [
      {
        id: "f92dab45-a048-462d-9c5e-b68d3d993acc",
        meal_id: "c506a7d0-8892-424a-beea-43cf3a089a81",
        description: "Description meal 3",
        time: 12,
        date: "2022-05-25",
        created_at: "2022-05-22 17:21:34",
        updated_at: "2022-05-22 17:21:34",
        order_id: null,
        like: null,
      },
      {
        id: "40b6189e-2775-4e4f-9820-c1dcfd568be8",
        meal_id: "c506a7d0-8892-424a-beea-43cf3a089a81",
        description: "Description meal 3",
        time: 13,
        date: "2022-05-25",
        created_at: "2022-05-22 17:21:35",
        updated_at: "2022-05-22 17:21:35",
        order_id: null,
        like: null,
      },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("./assets/icons/bolt-circle-white.png")}
          />
          <Text style={styles.title}>Jandaya</Text>
        </View>

        <TouchableOpacity style={styles.scanButton}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("./assets/icons/qr-scan.png")}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
        <FlatList
          style={{ paddingBottom: SPACING_MD }}
          data={DATA}
          renderItem={({ item }) => <ScheduleCard schedule={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
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
    justifyContent: "space-between",
    backgroundColor: BG,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: WHITE,
    fontSize: FS_LG,
    marginLeft: SPACING_MD,
    // fontFamily: "Poppins-Regular",
  },

  body: {
    // flex: 1,
    // paddingVertical: SPACING_LG,
    paddingBottom: SPACING_LG,
    backgroundColor: WHITE,
  },

  scanButton: {
    padding: SPACING_SM,
    backgroundColor: BG_SECONDARY,
    alignItems: "center",
    justifyContent: "center",
  },
});
