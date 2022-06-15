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
import { AntDesign } from '@expo/vector-icons'

import { color, font, space } from '../../style/styles'
import api from '../../services/api'
import OrderItem from '../../components/OrderItem'

export default function Orders({ navigation, route }) {
  const [orders, setOrders] = useState([])

  const loadData = () => {
    api
      .token(route.params.token)
      .getOrders()
      .then((response) => {
        if (!response) {
          return
        }

        setOrders(response)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    loadData()
  }, [])

  // Some data
  return (
    <View style={styles.container}>
      <View style={topbar.container}>
        <TouchableOpacity
          style={topbar.btn}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <View>
          <Text style={topbar.title}>Sistema de merendas do IFCE</Text>
          <Text style={topbar.subtitle}>Campus Jaguaribe</Text>
        </View>
      </View>

      <FlatList
        style={{ padding: space.lg }}
        data={orders}
        renderItem={({ item: order }) => (
          <OrderItem order={order} token={route.params.token} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
})

const topbar = StyleSheet.create({
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
