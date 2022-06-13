import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { card, color, font, shadow, space } from '../../style/styles'

export default function TopBar({ title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.qr}
          source={require('../../../assets/icons/qr.png')}
        />
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
  },

  btn: {
    padding: 10,
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
