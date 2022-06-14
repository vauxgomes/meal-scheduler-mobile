import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { color, font, space } from '../../style/styles'

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/imgs/f.png')}
      />
      <Text style={styles.title}>
        Sistema de merendas do IFCE campus Jaguaribe
      </Text>
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: color.line,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 2,
  },

  img: {
    width: 30,
    height: 37,
    marginEnd: space.md,
  },

  title: {
    width: '70%',
    fontSize: font.size.lg,
  },
})
