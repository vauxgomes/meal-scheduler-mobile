import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { button, color, font, space } from '../../style/styles'

export default function Login({ navigation, route }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.label}>Matrícula</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View>
          <TouchableOpacity style={button.body}>
            <Text style={button.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
  },

  main: {
    flex: 1,
    justifyContent: 'space-between',

    paddingVertical: space.xl,
    minWidth: '75%',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: font.size.xxxl,
    marginBottom: space.xxl,
  },

  label: {
    color: color.text,
    marginBottom: space.sm,
  },

  input: {
    height: 40,
    marginBottom: space.md,

    color: color.primary,

    paddingVertical: 10,
    paddingHorizontal: 5,

    borderBottomWidth: 1,
    borderBottomColor: color.secondary,
  },
})
