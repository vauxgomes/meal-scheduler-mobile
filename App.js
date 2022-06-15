import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './src/views/Login'
import Main from './src/views/Main'
import Orders from './src/views/Orders'
import Scanner from './src/views/Scanner'

import { color } from './src/style/styles'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />

          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Main}
          />

          <Stack.Screen
            name="Orders"
            options={{ headerShown: false }}
            component={Orders}
          />

          <Stack.Screen
            name="Scanner"
            options={{ headerShown: false }}
            component={Scanner}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
})
