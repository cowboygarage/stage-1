import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export function OptionsScreen({ navigation, route }) {
  const [username, setUsername] = useState(route.params.username);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Options:</Text>
      <TextInput
        placeholder="Enter username"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={username}
        onChangeText={setUsername}
      />
      <Button
        title="Home"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { username: username },
            merge: true,
          })
        }
      />
    </View>
  );
}
