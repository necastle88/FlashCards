import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";

import { deleteDeck } from "../redux/actions/index";

const DeleteFlyOut = ({ cardId, exitMenu, dispatch }) => {

  const deleteDeckHandler = () => {
    dispatch(deleteDeck(cardId));
    exitMenu();
  };

  return (
    <TouchableNativeFeedback onPress={deleteDeckHandler}>
      <View style={styles.cardBackground}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.subHead}>Delete</Text>
        </View>
        <View style={{ width: 24, height: 24, marginTop: 10, marginRight: 8 }}>
          <TouchableOpacity onPress={exitMenu}>
            <Feather name="x-circle" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    flexDirection: "row",
    width: 330,
    height: 80,
    borderRadius: 4,
    backgroundColor: "#c80815",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingLeft: 20,
    paddingBottom: 4,
    justifyContent: "space-between",
    marginBottom: 12,
  },
  subHead: {
    fontSize: 21,
    color: "#fff",
    fontWeight: "bold",
    opacity: 0.9,
  },
});

export default connect(null, null)(DeleteFlyOut);
