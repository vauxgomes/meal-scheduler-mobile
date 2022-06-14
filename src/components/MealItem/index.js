import { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { color, font, space } from '../../style/styles'
import { FontAwesome } from '@expo/vector-icons'
import api from '../../services/api'

export default function MealItem({ meal, route }) {
  const [like, setLike] = useState(meal.like)

  const handleLike = () => {
    api
      .token(route.params.token)
      .putLike(meal.id, !like)
      .then((response) => {
        setLike(!like)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.meal}>
        <Text style={styles.description}>{meal.description}</Text>
        <Text style={styles.time}>{meal.time_nice}</Text>
      </View>

      {/* <TouchableOpacity style={styles.like} onPress={handleLike}>
        <FontAwesome
          name="heart"
          size={font.size.xl}
          color={like ? color.heart : color.secondary}
        />
      </TouchableOpacity> */}
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

  like: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 40,
    height: 40,
    marginLeft: space.sm,
  },
})
