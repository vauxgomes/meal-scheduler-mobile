import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color, font, space } from '../../style/styles'

export default function CountDownTimer({
  styles,
  started = true,
  timeInSeconds,
  onEndingTime,
}) {
  const [time, setTime] = useState(timeInSeconds)

  useEffect(() => {
    if (started)
      if (time > 0) {
        const interval = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
        return () => clearTimeout(interval)
      } else {
        onEndingTime()
      }
  }, [time, started])

  return <Text style={styles}>{`${time}`.padStart(2, '0')}</Text>
}
