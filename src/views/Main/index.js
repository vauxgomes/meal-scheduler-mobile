import { useState, useCallback, useEffect } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

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
    wait(1000).then(() => setRefreshing(false))

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
          console.log(schedule);
          schedule.description = schedule.description.replace(/(\r\n|\n|\r)/gm, " ")

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

  return (
    <View style={styles.container}>
      <TopBar
        icon="bars"
        target="Orders"
        navigation={navigation}
        route={route}
      />

      {/* Schedules View */}
      {schedules.length > 0 && (
        <FlatList
          style={{ flexGrow: 1, paddingTop: space.sm }}
          data={schedules}
          renderItem={({ item: day }) => <DayCard day={day} route={route} />}
          keyExtractor={(item, index) => index}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}

      {/* Empty View */}
      {schedules.length == 0 && (
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
      )}

      <View style={stylesScan.container}>
        <TouchableOpacity
          style={stylesScan.btn}
          onPress={() => navigation.navigate('Scanner', route.params)}
        >
          <FontAwesome name={'qrcode'} size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',

    flex: 1,
    justifyContent: 'space-between',

    width: '100%',
    backgroundColor: color.background,
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const stylesScan = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: space.sm,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: space.md,
    width: 60,

    backgroundColor: '#000',
    borderRadius: 50,
  },
})
