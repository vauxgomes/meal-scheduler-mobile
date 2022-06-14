import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color, font, space } from '../../../style/styles'

export default function CountDownTimer({ timeInSeconds, onEndingTime }) {
  const [time, setTime] = useState(timeInSeconds)

  useEffect(() => {
    if (time > 0) {
      const interval = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
      return () => clearTimeout(interval)
    } else {
      onEndingTime()
    }
  }, [time])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${time}`.padStart(2, '0')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: color.white,
    borderWidth: 8,
    padding: space.lg,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: font.size.xxl,
    textAlign: 'center',
  },
})
