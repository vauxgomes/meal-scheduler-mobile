import { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { color, font, shadow, space } from '../../style/styles'
import api from '../../services/api'
import CameraNotAllowed from './CameraNotAllowed'
import TopBar from '../../components/TopBar'
import CountDownTimer from './CountDownTimer'

export default function Scanner({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [data, setData] = useState('')

  const [hasSent, setHasSent] = useState(false)
  const [hasExpired, setHasExpired] = useState(false)
  const [response, setResponse] = useState('')

  const askForCameraPermission = () => {
    const ask = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    ask()
  }

  useEffect(() => {
    askForCameraPermission()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    setData(data)

    // api
    //   .token(route.params.token)
    //   .postOrder(data)
    //   .then((response) => {
    //     if (!response) {
    //       alert(response)
    //     }

    //     alert(JSON.stringify(response))
    //     setResponse(response)
    //   })
  }

  /** Camera not allowed */
  if (!hasPermission) return <CameraNotAllowed />

  /** Not scanned */
  if (!scanned)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <View style={styles.scanner}></View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </SafeAreaView>
    )

  return (
    <View>
      <CountDownTimer
        timeInSeconds={hasExpired ? 0 : 45}
        onEndingTime={() => setHasExpired(true)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    width: '100%',
    backgroundColor: color.background,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.secondary,
  },

  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: space.xs,
    marginBottom: space.md,

    backgroundColor: color.secondary,
    borderRadius: 12,
  },
})
