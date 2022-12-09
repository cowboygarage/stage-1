import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export function MusicScreen({ navigation, route }) {
  const [count, setCount] = useState(route.params.playCount);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Music</Text>
      <Text>No.of times played: {count}</Text>
      <Button
        title="Play Distant Memory by Lau Heng Yi"
        onPress={() => setCount(count + 1)}
      />
      <Button
        title="Home"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { playCount: count },
            merge: true,
          })
        }
      />
    </View>
  );
}
