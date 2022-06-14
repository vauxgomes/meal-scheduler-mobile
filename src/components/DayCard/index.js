import { View, StyleSheet, FlatList, Text } from 'react-native'
import { card, color, font, shadow, space } from '../../style/styles'
import MealItem from '../MealItem'

export default function DayCard({ day }) {
  return (
    <View style={[styles.container, card.body, shadow.sm]}>
      <View style={styles.day}>
        <Text style={styles.name}>
          {new Date(day.date)
            .toLocaleDateString('pt-BR', { weekday: 'short' })
            .replace('.', '')}
        </Text>
        <Text style={styles.number}>{new Date(day.date).getDay()}</Text>
      </View>

      <FlatList
        style={styles.meals}
        horizontal={false}
        data={day.meals}
        renderItem={({ item: meal }) => <MealItem meal={meal} />}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginBottom: space.md,
  },

  day: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',

    padding: space.md,
    marginEnd: space.md,
    marginVertical: space.xs,

    minWidth: 50,
    minHeight: 50,

    backgroundColor: color.primary,
    borderRadius: 8,
  },

  name: {
    color: color.white,
    fontWeight: '800',
    fontSize: font.size.xs,
    textTransform: 'uppercase',
  },

  number: {
    color: color.white,
    fontWeight: '800',
    fontSize: font.size.md,
  },

  meals: {
    flex: 1,
  },
})
