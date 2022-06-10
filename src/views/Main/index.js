import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import MealCard from '../../components/MealCard'
import TopBar from '../../components/TopBar'
import { card, color, font, shadow, space } from '../../style/styles'

export default function Main({ navigation, route }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TopBar title={'Sistema de merendas do IFCE Jaguaribe'} />

        <ScrollView
          style={{
            padding: space.lg,
            paddingBottom: space.xl,
          }}
        >
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
  },

  main: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
})
