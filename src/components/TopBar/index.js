import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { color, font, space } from '../../style/styles'

export default function TopBar({
  icon,
  target,
  navigation,
  route,
  goBack = false,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (target) {
            navigation.navigate(target, route.params)
          } else if (goBack) {
            navigation.goBack()
          }
        }}
      >
        {goBack ? (
          <AntDesign name="arrowleft" size={24} color="black" />
        ) : (
          <FontAwesome name={icon} size={24} color="black" />
        )}
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Sistema de merendas do IFCE</Text>
        <Text style={styles.subtitle}>Campus Jaguaribe</Text>
      </View>
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

  btn: {
    width: 29,
    padding: space.xs,
    marginEnd: space.md,
  },

  title: {
    fontSize: font.size.lg,
  },

  subtitle: {
    color: color.secondary,
    fontSize: font.size.md,
  },
})
