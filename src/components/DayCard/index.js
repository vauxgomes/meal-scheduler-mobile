import { View, StyleSheet, FlatList, Text } from 'react-native'
import { card, color, font, shadow, space } from '../../style/styles'
import MealItem from '../MealItem'

export default function DayCard({ day, route }) {
  return (
    <View style={styles.container}>
      <View style={[card.body, shadow.sm]}>
        <View style={styles.day}>
          <Text style={styles.name}>
            {new Date(day.date).toLocaleDateString('pt-BR')}
          </Text>
        </View>

        <FlatList
          style={styles.meals}
          horizontal={false}
          data={day.meals}
          renderItem={({ item: meal }) => (
            <MealItem meal={meal} route={route} />
          )}
          keyExtractor={(meal) => meal.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: space.md,
    paddingVertical: space.sm,
  },

  day: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',

    padding: space.xs,
    marginEnd: space.md,
    marginVertical: space.xs,
    marginBottom: space.sm,

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
    width: '100%',
  },
})
