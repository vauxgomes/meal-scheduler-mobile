import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { color, font, space } from '../../style/styles'
import api from '../../services/api'

export default function OrderItem({ order, token }) {
  const [like, setLike] = useState(order.like)

  const handleLike = () => {
    api
      .token(token)
      .putLike(order.id, !like)
      .then((response) => {
        setLike(!like)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleLike}>
      <View>
        <Text style={styles.description}>{order.description}</Text>
        <Text style={styles.date}>{order.created_at}</Text>
      </View>

      <FontAwesome
        name="heart"
        size={font.size.xl}
        color={like ? color.heart : color.secondary}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: color.background,
    paddingVertical: space.md,
    borderBottomColor: color.line,
    borderBottomWidth: 1,
  },

  description: {
    fontSize: font.size.md,
  },

  date: {
    color: color.secondary,
    fontSize: font.size.sm,
  },

  like: {},
})
