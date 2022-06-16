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
import TopBar from '../../components/TopBar'

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
      <TopBar goBack={true} navigation={navigation} />

      {orders.length > 0 && (
        <FlatList
          style={{ padding: space.lg }}
          data={orders}
          renderItem={({ item: order }) => (
            <OrderItem order={order} token={route.params.token} />
          )}
          keyExtractor={(item, index) => index}
        />
      )}

      {/* Empty View */}
      {orders.length == 0 && (
        <View style={styles.empty}>
          <Text>Você não consumiu tickets</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
