import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { color, font, space } from '../../style/styles'

export default function TopBar({ title, icon, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <FontAwesome name={icon} size={26} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: space.lg,
    paddingVertical: space.md,

    backgroundColor: color.background,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 2,
  },

  btn: {
    paddingVertical: space.md - 3,
    paddingHorizontal: space.md,
    marginRight: space.md,

    backgroundColor: color.primary,
    borderRadius: '50%',
  },

  qr: {
    height: 32,
    width: 32,
  },

  slice: {
    width: 30,
    height: 4,
    marginVertical: 2,

    backgroundColor: color.primary,
    borderRadius: 4,
  },

  title: {
    width: '70%',
    fontSize: font.size.lg,
  },
})
