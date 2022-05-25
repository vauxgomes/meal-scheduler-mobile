// https://www.youtube.com/watch?v=LtbuOgoQJAg

import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

import {
  BG,
  BG_SECONDARY,
  FS_LG,
  GRAY_MEDIUM,
  SPACING_LG,
  SPACING_MD,
  SPACING_XG,
  SPACING_XS,
  WHITE,
} from "../../styles/styles";

import api from "../../services/api";

export default function Login({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@username", username);
      await AsyncStorage.setItem("@password", password);
    } catch (e) {
      // saving error
    }
  };

  const loadData = async () => {
    try {
      const username = await AsyncStorage.getItem("@username");
      const password = await AsyncStorage.getItem("@password");

      if (username && password) {
        setUsername(username);
        setPassword(password);

        storeData();
        handleLogin(username, password);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    if (!username || !password) {
      loadData();
    }
  }, []);

  const handleLogin = (username, password) => {
    api
      .getToken(username, password)
      .then((response) => {
        try {
          if (response.success) {
            storeData();
            navigation.navigate("home", { token: response.token });
            api.setToken(response.token);
          }
        } catch (err) {
          alert("Não foi possível conectar-se com o Servidor.");
        }
      })
      .catch((err) => {
        alert("Login ou senhar inconreta.");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[BG, BG_SECONDARY]} style={styles.background} />

      <Image
        style={styles.img}
        source={require("../../../assets/bolt-circle-big.png")}
      />

      <View>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleLogin(username, password)}
      >
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    // padding: SPACING_MD,
  },

  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  img: {
    width: 200,
    height: 200,
    marginBottom: SPACING_XG,
  },

  label: {
    color: GRAY_MEDIUM,
    fontWeight: "bold",

    marginBottom: SPACING_XS,
    zIndex: 100,
  },

  input: {
    width: 280,
    // height: 40,
    marginBottom: SPACING_MD,
    borderWidth: 2,
    borderRadius: 6,
    color: WHITE,
    padding: SPACING_MD,
    fontSize: FS_LG,
    fontWeight: "600",
    zIndex: 100,
  },

  btn: {
    padding: SPACING_MD,
    backgroundColor: BG,
    borderRadius: 6,
    width: 150,
  },

  btnText: {
    color: WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
});
