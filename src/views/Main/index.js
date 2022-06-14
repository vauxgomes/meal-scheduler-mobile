import { useState, useCallback, useEffect } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
} from 'react-native'

import DayCard from '../../components/DayCard'
import TopBar from '../../components/TopBar'

import { color, space } from '../../style/styles'
import api from '../../services/api'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export default function Main({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false)
  const [schedules, setSchedules] = useState([])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))

    loadData()
  }, [])

  const loadData = () => {
    api
      .token(route.params.token)
      .getWeek()
      .then((response) => {
        if (!response) {
          return
        }

        let date = null
        const schedules = []

        response.forEach((schedule) => {
          if (schedule.date === date) {
            schedules[schedules.length - 1].meals.push(schedule)
          } else {
            date = schedule.date
            schedules.push({
              id: schedules.length,
              date: schedule.date,
              meals: [schedule],
            })
          }
        })

        setSchedules(schedules)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  // Empty Data
  if (schedules.length == 0) {
    return (
      <View style={styles.container}>
        <TopBar
          onPress={() => navigation.navigate('Scanner', route.params)}
          icon={'qrcode'}
          title={'Sistema de merendas do IFCE Jaguaribe'}
        />

        {/* Refresh View */}
        <ScrollView
          contentContainerStyle={styles.empty}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.empty}>
            <Text>Nenhum dado carregado</Text>
            <Text>Segure e arraste para baixo para recarregar a tela</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

  // Some data
  return (
    <View style={styles.container}>
      <TopBar
        onPress={() => navigation.navigate('Scanner', route.params)}
        icon={'qrcode'}
        title={'Sistema de merendas do IFCE Jaguaribe'}
      />

      {/* Refresh View */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          style={{ padding: space.lg }}
          data={schedules}
          renderItem={({ item: day }) => <DayCard day={day} />}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

    width: '100%',
    backgroundColor: color.background,
  },

  reload: {
    backgroundColor: 'red',
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
