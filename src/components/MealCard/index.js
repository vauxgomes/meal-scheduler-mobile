import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { card, color, font, shadow, space } from '../../style/styles'
import { FontAwesome } from '@expo/vector-icons'

export default function MealCard({ navigation, route }) {
  return (
    <View style={[styles.container, card.body, shadow.sm]}>
      <View style={styles.img}></View>
      <View style={styles.meal}>
        <Text style={styles.description}>Ovo</Text>
        <Text style={styles.time}>Café da Manhã</Text>
      </View>
      <TouchableOpacity style={styles.like}>
        <FontAwesome name="heart-o" size={18} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginBottom: space.md,
  },

  img: {
    width: 50,
    height: 50,
    marginEnd: space.md,
    backgroundColor: color.secondary,
    borderRadius: '50%',
  },

  meal: {
    flexGrow: 1,
  },

  description: {
    marginBottom: space.xs,
    fontSize: font.size.lg,
    fontWeight: '600',
  },

  time: {
    color: color.secondary,
  },

  like: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 40,
    height: 40,
    backgroundColor: color.primary,
    borderRadius: '50%',
  },
})
