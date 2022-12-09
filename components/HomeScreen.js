import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export function HomeScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="User Information" onPress={toggleModal} />

      <Modal isVisible={modalVisible}>
        <View style={styles.modalView}>
          <Text>User Info:</Text>
          <Text>playCount: {route.params.playCount}</Text>
          <Text>username: {route.params.username}</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>

      <Button
        title="Options"
        onPress={() =>
          navigation.navigate("Options", {
            username: route.params.username,
          })
        }
      />
      <Button
        title="Music"
        onPress={() =>
          navigation.navigate("Music", {
            playCount: route.params.playCount,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
