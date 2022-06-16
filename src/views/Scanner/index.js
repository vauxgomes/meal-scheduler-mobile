import { useState, useEffect } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import CameraNotAllowed from './CameraNotAllowed'
import ScheduleCheckin from '../ScheduleCheckin'
import TopBar from '../../components/TopBar'

import { color, font, shadow, space } from '../../style/styles'
import api from '../../services/api'

export default function Scanner({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [schedule, setSchedule] = useState(undefined)

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
    api
      .token(route.params.token)
      .getSchedule(data)
      .then((response) => {
        if (response) {
          setSchedule(response)
          setScanned(true)
        }
      })
  }

  /** Camera not allowed */
  if (!hasPermission) return <CameraNotAllowed />

  /** Not scanned */
  if (!scanned)
    return (
      <SafeAreaView style={styles.container}>
        <TopBar goBack={true} navigation={navigation} />
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
    <ScheduleCheckin
      navigation={navigation}
      route={route}
      schedule={schedule}
    />
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
