import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/views/Login";
import Main from "./src/views/Main";
import Scanner from "./src/views/Scanner";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={Main}
        />
        <Stack.Screen
          name="scanner"
          options={{ headerShown: false }}
          component={Scanner}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
