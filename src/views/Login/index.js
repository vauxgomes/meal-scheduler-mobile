import { useState } from 'react'

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'

import { button, color, font, space } from '../../style/styles'
import api from '../../services/api'

export default function Login({ navigation, route }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    api
      .login(username, password)
      .then((response) => {
        if (response && response.success) {
          navigation.navigate('Home', { token: response.token })
        }
      })
      .catch((error) => {
        alert(`Error: ${error.response.data.message}`)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/imgs/f.png')}
          />

          <Text style={styles.title}>Jandaya</Text>
          <Text style={styles.subtitle}>
            Sistema de merendas do IFCE Jaguaribe
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Matrícula</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="nome.sobrenome"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="matrícula"
          />
        </View>

        <View>
          <TouchableOpacity
            style={[button.container, button.primary]}
            onPress={handleLogin}
          >
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

  img: {
    width: 30,
    height: 37,
    marginTop: space.md,
    marginBottom: space.lg,
  },

  title: {
    color: color.primary,
    fontSize: font.size.xxxl,
    // marginBottom: space.xxl,
  },

  subtitle: {
    color: color.secondary,
    fontSize: font.size.sm,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
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
