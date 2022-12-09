import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MusicScreen } from "./components/MusicScreen";
import { UserInfoScreen } from "./components/UserInfoScreen";
import { OptionsScreen } from "./components/OptionsScreen";
import { HomeScreen } from "./components/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ playCount: 0, username: "User01" }}
        />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
