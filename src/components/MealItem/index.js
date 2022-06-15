import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { color, font, space } from '../../style/styles'

export default function MealItem({ meal, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.meal}>
        <Text style={styles.time}>{meal.time_nice}</Text>
        <Text style={styles.description}>{meal.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  meal: {
    flexGrow: 1,
    borderBottomColor: color.line,
    borderBottomWidth: 1,
    paddingVertical: space.sm,
  },

  description: {
    marginBottom: space.xs,
    fontSize: font.size.lg,
    fontWeight: '600',
  },

  time: {
    color: color.secondary,
  },
})
