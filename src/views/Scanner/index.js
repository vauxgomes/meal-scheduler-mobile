// https://www.youtube.com/watch?v=LtbuOgoQJAg

import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  BG,
  BG_SECONDARY,
  BG_WARNING,
  BLACK,
  FS_LG,
  FS_MD,
  FS_XL,
  FS_XXL,
  FS_XXXL,
  GRAY_LINE,
  GRAY_MEDIUM,
  PRIMARY,
  SPACING_LG,
  SPACING_MD,
  SPACING_SM,
  SPACING_XG,
  SPACING_XS,
  WHITE,
} from "../../styles/styles";
import CountDownTimer from "../../components/CountDownTimer";

const PREFIX = "vxgs://";

export default function Scanner() {
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
      <View style={styles.container}>
        <Text>
          É necessário autorizar a câmera para que seja possível ler os QRCode
        </Text>
      </View>
    );
  }

  if (!scanned) {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />

        <Text style={styles.info}>{"<Faça a leitura do QRCode />"}</Text>
        {/* <TouchableOpacity
          style={styles.scanner}
          onPress={() => {
            setScanned(true);
          }}
        ></TouchableOpacity> */}
      </View>
    );
  }

  if (!hasSent)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => setHasSent(true)}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View style={[styles.countDown, hasExpired ? styles.expired : undefined]}>
      <Text style={styles.date}>20/05/2022</Text>

      <CountDownTimer
        timeInSeconds={5}
        onEndingTime={() => setHasExpired(true)}
      />

      <Text style={styles.info}>Vaux Sandino Diniz Gomes</Text>
      <Text style={styles.enrollmentCode}>2022250420222504</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: BG_SECONDARY,
    paddingVertical: SPACING_MD,
    borderRadius: 8,
    width: 250,
  },

  countDown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BG_SECONDARY,
  },

  expired: {
    backgroundColor: BG_WARNING,
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
    color: WHITE,
  },

  enrollmentCode: {
    color: WHITE,
    backgroundColor: BLACK,
    padding: SPACING_XS,
    fontWeight: "600",
  },
});
