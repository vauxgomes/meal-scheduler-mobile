// https://www.youtube.com/watch?v=LtbuOgoQJAg

import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  BG,
  BG_SECONDARY,
  BG_WARNING,
  BLACK,
  FS_MD,
  FS_XL,
  SPACING_MD,
  SPACING_SM,
  SPACING_XG,
  SPACING_XS,
  WHITE,
} from "../../styles/styles";
import CountDownTimer from "../../components/CountDownTimer";
import Header from "../../components/Header";

const PREFIX = "vxgs://";

export default function Scanner({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [hasExpired, setHasExpired] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data.startsWith(PREFIX)) {
      setScanned(true);
    }
  };

  if (!hasPermission) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} hideQRButton={true} />

        <View style={styles.body}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../../../assets/icons/qr-scan.png")}
          />

          <Text style={styles.info}>É necessário autorizar a câmera!</Text>
          <Text style={styles.info}>Verifique as configurações do App!</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!scanned) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} hideQRButton={true} />

        <View style={styles.body}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
          />

          <Text style={styles.info}>{"Faça a leitura do QRCode"}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!hasSent)
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} hideQRButton={true} />

        <View style={styles.body}>
          <TouchableOpacity style={styles.btn} onPress={() => setHasSent(true)}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../../assets/icons/qr-scan.png")}
            />

            <Text style={styles.btnText}>Iniciar Contador</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} hideQRButton={true} />
      <View style={[styles.countDown, hasExpired ? styles.expired : undefined]}>
        <Text style={styles.date}>20/05/2022</Text>

        <CountDownTimer
          timeInSeconds={hasExpired ? 0 : 45}
          onEndingTime={() => setHasExpired(true)}
        />

        <Text style={styles.info}>Vaux Sandino Diniz Gomes</Text>
        <Text style={styles.enrollmentCode}>2022250420222504</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLACK,
  },

  scanner: {
    width: 250,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: WHITE,
  },

  img: {
    width: 250,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BG,
    paddingVertical: SPACING_MD,
    paddingHorizontal: SPACING_XG,
    borderRadius: 8,
  },

  btnText: {
    color: WHITE,
    fontWeight: "600",
    marginTop: SPACING_MD,
  },

  countDown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BG,
  },

  expired: {
    backgroundColor: BG_SECONDARY,
  },

  date: {
    marginBottom: SPACING_XG,
    padding: SPACING_XS,
    backgroundColor: WHITE,
    fontSize: FS_XL,
    fontWeight: "bold",
    color: BLACK,
  },

  info: {
    marginTop: SPACING_MD,
    marginBottom: SPACING_SM,
    fontSize: FS_MD,
    fontWeight: "600",
    // textTransform: "uppercase",
    textAlign: "center",
    color: WHITE,
  },

  enrollmentCode: {
    color: WHITE,
    backgroundColor: BLACK,
    padding: SPACING_XS,
    fontWeight: "600",
  },
});
