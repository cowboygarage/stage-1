import React from "react";
import { Text, View, Button } from "react-native";

export function UserInfoScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Info:</Text>
      <Text>Username: {route.params.username}</Text>
      <Text>Number of Songs Played: {route.params.playCount}</Text>
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}
