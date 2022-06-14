import { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { color, font, shadow, space } from '../../../style/styles'

export default function CameraNotAllowed() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>É necessário autorizar a câmera!</Text>
        <Text style={styles.text}>Verifique as configurações do App!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
  },

  text: {
    fontSize: font.size.md,
    color: color.text,
  },
})
