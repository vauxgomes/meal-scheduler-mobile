import { StyleSheet, Text, View } from 'react-native'
import { color, font, space } from '../../style/styles'

export default function FieldValue({ field, value }) {
  return (
    <View style={{ marginBottom: space.sm }}>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    marginBottom: space.xs,
    color: color.secondary,
    fontSize: font.size.sm,
  },
  value: {
    color: color.text,
    fontSize: font.size.md,
    fontWeight: '600',
  },
})
