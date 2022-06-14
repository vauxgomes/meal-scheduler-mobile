import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CountDownTimer from '../../components/CountDownTimer'
import FieldValue from '../../components/FieldValue'
import api from '../../services/api'

import { button, color, font, space } from '../../style/styles'

export default function ScheduleCheckin({ schedule, navigation, route }) {
  const [started, setStarted] = useState(false)
  const [error, setError] = useState(false)
  const [createdAt, setCreatedAt] = useState('')

  const handleSubmit = () => {
    api
      .token(route.params.token)
      .postOrder(schedule.id)
      .then((response) => {
        setStarted(true)
        setCreatedAt(response.order.created_at)
      })
      .catch((err) => {
        if (!started) {
          setError(true)
        }
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-in</Text>

      <View
        style={[
          styles.counterContainer,
          started && styles.bgStarted,
          error && styles.bgError,
        ]}
      >
        <View style={styles.counter}>
          <CountDownTimer
            styles={styles.timer}
            started={started}
            timeInSeconds={45}
            onEndingTime={() => {}}
          />
        </View>

        <Text style={styles.date}>
          {new Date(schedule.date).toLocaleDateString('pt-BR', {
            month: 'short',
            day: 'numeric',
          })}
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <FieldValue field={'Refeição'} value={schedule.time_nice} />
        <FieldValue field={'Título'} value={schedule.title} />
        <FieldValue field={'Descrição'} value={schedule.description} />
      </View>

      {started && (
        <View style={{ width: '100%' }}>
          <FieldValue field={'Consumo'} value={createdAt} />
        </View>
      )}

      <View style={{ width: '100%' }}>
        {(!error || started) && (
          <TouchableOpacity
            style={[
              button.container,
              button.primary,
              { marginBottom: space.md },
            ]}
            onPress={handleSubmit}
          >
            <Text style={button.text}>Solicitar Ticket</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={button.container}
          onPress={() => navigation.goBack()}
        >
          <Text style={button.text}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: space.lg,
    backgroundColor: color.background,
  },

  title: {
    fontSize: font.size.lg,
    fontWeight: '600',
  },

  counterContainer: {
    width: 180,

    padding: space.sm,
    backgroundColor: '#000',
    borderRadius: 16,
  },

  bgStarted: {
    backgroundColor: color.primary,
  },

  bgError: {
    backgroundColor: color.warning,
  },

  counter: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: space.md,
    marginBottom: space.sm,

    backgroundColor: color.white,
    borderRadius: 8,
  },

  timer: {
    fontSize: font.size.xxxl * 3,
    fontWeight: '700',
  },

  date: {
    color: color.white,

    fontSize: font.size.lg,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  btn: {
    backgroundColor: color.primary,
  },
})
