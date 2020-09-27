import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const QuizCompletion = ({points, quizReset, toHome, cards }) => {

  return (
  
    /*complete quiz component */
    <View style={styles.cardContainer}>
    <Text style={styles.completeText}>Quiz Complete</Text>
    <Text style={styles.precentageText}>{`${(points / cards).toFixed(2) * 100}%`}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => quizReset()}
    >
      <Text style={styles.buttonText}>Try Again</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => toHome()}
    >
      <Text style={styles.buttonText}>Decks</Text>
    </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    marginLeft: 22,
    width: 315,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 24,
  },
  button: {
    height: 45,
    width: "42%",
    fontSize: 60,
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  numberOfQuestions: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3531",
    opacity: 0.9,
  },
  completeText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2C3531",
    
  },
  precentageText: {
    fontSize: 64,
    fontWeight: "500",
    color: "#2C3531",
    width: "100%",
    opacity: .8
  },
});

export default QuizCompletion;
